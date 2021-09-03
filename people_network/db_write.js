const mysql = require("mysql");

const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "111",
    DB: "mydb",
    PORT: "4406"
};

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT,
});

// eslint-disable-next-line no-undef
module.exports = connection;
