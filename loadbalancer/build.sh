#!/bin/bash

docker-compose down
rm -rf ./master/data/*
rm -rf ./slave/data1/*
rm -rf ./slave/data2/*

docker-compose build
docker-compose up -d

until docker exec mysql_master9 sh -c 'export MYSQL_PWD=111; mysql -u root -e ";"'
do
    echo "Waiting for mysql_master database connection..."
    sleep 4
done

priv_stmt='GRANT REPLICATION SLAVE ON *.* TO "mydb_slave_user"@"%" IDENTIFIED BY "mydb_slave_pwd"; FLUSH PRIVILEGES;'
docker exec mysql_master9 sh -c "export MYSQL_PWD=111; mysql -u root -e '$priv_stmt'"

docker exec mysql_master9 sh -c "export MYSQL_PWD=111;
 mysql -u root -e 'INSTALL PLUGIN 'rpl_semi_sync_master' SONAME \"semisync_master.so\";'"
 
docker exec mysql_slave91 sh -c "export MYSQL_PWD=111;
 mysql -u root -e 'INSTALL PLUGIN 'rpl_semi_sync_slave' SONAME \"semisync_slave.so\";'"

docker exec mysql_slave92 sh -c "export MYSQL_PWD=111;
 mysql -u root -e 'INSTALL PLUGIN 'rpl_semi_sync_slave' SONAME \"semisync_slave.so\";'"


docker exec mysql_master9 sh -c "export MYSQL_PWD=111; mysql -u root -e 'SET GLOBAL rpl_semi_sync_master_enabled = 1;'"
docker exec mysql_slave91 sh -c "export MYSQL_PWD=111; mysql -u root -e 'SET GLOBAL rpl_semi_sync_slave_enabled = 1;'"
docker exec mysql_slave92 sh -c "export MYSQL_PWD=111; mysql -u root -e 'SET GLOBAL rpl_semi_sync_slave_enabled = 1;'"

until docker-compose exec mysql_slave91 sh -c 'export MYSQL_PWD=111; mysql -u root -e ";"'
do
    echo "Waiting for mysql_slave91 database connection..."
    sleep 4
done

until docker-compose exec mysql_slave92 sh -c 'export MYSQL_PWD=111; mysql -u root -e ";"'
do
    echo "Waiting for mysql_slave92 database connection..."
    sleep 4
done

docker-ip() {
    docker inspect --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' "$@"
}

echo '$(docker-ip mysql_master91)'; 
echo '$(docker-ip mysql_master92)';

MS_STATUS=`docker exec mysql_master9 sh -c 'export MYSQL_PWD=111; mysql -u root -e "SHOW MASTER STATUS"'`
CURRENT_LOG=`echo $MS_STATUS | awk '{print $6}'`
CURRENT_POS=`echo $MS_STATUS | awk '{print $7}'`

start_slave_stmt="CHANGE MASTER TO MASTER_HOST='$(docker-ip mysql_master9)',MASTER_USER='mydb_slave_user',MASTER_PASSWORD='mydb_slave_pwd',MASTER_LOG_FILE='$CURRENT_LOG',MASTER_LOG_POS=$CURRENT_POS; START SLAVE;"
start_slave_cmd='export MYSQL_PWD=111; mysql -u root -e "'
start_slave_cmd+="$start_slave_stmt"
start_slave_cmd+='"'
docker exec mysql_slave91 sh -c "$start_slave_cmd"

docker exec mysql_slave91 sh -c "export MYSQL_PWD=111; mysql -u root -e 'SHOW SLAVE STATUS \G'"

docker exec mysql_slave92 sh -c "$start_slave_cmd"

docker exec mysql_slave92 sh -c "export MYSQL_PWD=111; mysql -u root -e 'SHOW SLAVE STATUS \G'"


