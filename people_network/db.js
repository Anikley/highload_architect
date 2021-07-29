/* eslint-disable no-undef */
const mysql = require("mysql");

const dbConfig = {
    HOST: "us-cdbr-east-04.cleardb.com", //process.env.DB_HOST,
    USER: "b920a6ea8abe3c", //process.env.DB_USER,
    PASSWORD: "4830f1fc", //process.env.DB_PASSWORD,
    DB: "heroku_f4fda1262322f10", //process.env.DB_NAME,
};

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

// eslint-disable-next-line no-undef
module.exports = connection;
