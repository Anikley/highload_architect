const mysql = require("mysql");

const dbConfig = {
    HOST: "localhost",
    PORT: "5506",
    USER: "root",
    PASSWORD: "111",
    DB: "mydb",
};

const connection = mysql.createPool({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

// eslint-disable-next-line no-undef
module.exports = connection;
