const mysql = require("mysql");

const dbConfig = {
    HOST: ${{ secrets.DB_HOST }},
    USER: ${{ secrets.DB_USER }},
    PASSWORD: ${{ secrets.DB_PASSWORD }},
    DB: ${{ secrets.DB_NAME }},
};

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

// eslint-disable-next-line no-undef
module.exports = connection;
