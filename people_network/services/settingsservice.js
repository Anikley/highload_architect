const sql = require("../db");

var settingsservice = {};

/**
 * Вернуть все настройки
 */
settingsservice.getAll = () => {
    return new Promise(function (resolve, reject) {
        sql.query(
            "SELECT * FROM settings",
            (err, result) => {
                if (err) {
                    // eslint-disable-next-line no-console
                    console.log("error: ", err);
                    reject(err);
                }
                if (!err) resolve(JSON.parse(JSON.stringify(result)));
            }
        );
    });
};

// eslint-disable-next-line no-undef
module.exports = settingsservice;