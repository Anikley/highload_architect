const sql = require("../db");

const sqlRd = require("../db_replica1");

const TarantoolConnection = require("tarantool-driver");

let connTr = new TarantoolConnection({
    port: 3301,
});

//const person = require("./../models/person");

var personservice = {};

/**
 * Создать пользователя
 */
personservice.create = (newPerson) => {
  return new Promise(function (resolve, reject) {
    sql.query("INSERT INTO person SET ?", newPerson, (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
        return;
      }
      resolve({ id: res.insertId, CreateDate: "STR_TO_DATE()", ...newPerson });
    });
  });
};

/**
 * Выбрать всех пользователей
 */
personservice.getAll = (mylogin) => {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT * FROM person WHERE Login <> '${mylogin}' LIMIT 10000`,
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        }
        if (!err) resolve(JSON.parse(JSON.stringify(result)));
      }
    );
  });
};

/**
 * Проверка пользовательского логина и пароля
 */
personservice.verify = (login) => {
  return new Promise(function (resolve, reject) {
    sql.query(
      "SELECT * FROM person WHERE login = ?",
      [login],
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        }
        if (!err) resolve(JSON.parse(JSON.stringify(result)));
      }
    );
  });
};

personservice.getByLogin = (login) => {
  return new Promise(function (resolve, reject) {
    sql.query(
      `SELECT Id FROM person WHERE person.Login = '${login}'`,
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        }
        var data = JSON.parse(JSON.stringify(result));
        if (data.length) {
          resolve(data[0]);
        } else {
          resolve(null);
        }
      }
    );
  });
};

personservice.getRepeatedDataFromMySql = () => {
  return new Promise(function (resolve, reject) {
    sqlRd.query(
      `SELECT * FROM person`,
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        }
        var data = JSON.parse(JSON.stringify(result));
        if (data.length) {
          resolve(data.length);
        } else {
          resolve(0);
        }
      }
    );
  });
};

personservice.getRepeatedDataFromTarantool = () => {
  return new Promise(function (resolve, reject) {

    var TarantoolConnection = require('tarantool-driver');
        var conn = new TarantoolConnection({port: 3302});

        conn.ping().then((res) => {
          console.log("Pong: " + res);
        });

        conn.select('mysqldata', 0, 1000, 0, 'eq', []).then((result) => {
            const data = JSON.parse(JSON.stringify(result));

            if (data.length) {
              resolve(data.length);
            } else {
              resolve(0);
            }
          });
  });
}

module.exports = personservice;