const sql = require("../db");
//const links = require("./../models/links");
const personService = require(__dirname + "/personservice");

var linkservice = {};

// Проверка связи
linkservice.isFriend = (myLogin, anotherPersonLogin) => {
    return new Promise((resolve) => {
        sql.query(
            `SELECT * FROM links WHERE links.Person1_ID in(SELECT Id FROM person WHERE person.Login ='${myLogin}' OR person.Login ='${anotherPersonLogin}')  AND links.Person2_ID in (SELECT Id FROM person WHERE person.Login ='${myLogin}' OR person.Login ='${anotherPersonLogin}')`,
            (err, result) => {
                if (err) {
                    // eslint-disable-next-line no-console
                    console.log("error: ", err);
                    resolve({ isExist: false, state: 0 });
                }
                let links = JSON.parse(JSON.stringify(result));

                if (links.length >= 1) {
                    resolve({ isExist: true, state: links[0].State });
                } else {
                    resolve({ isExist: false, state: 0 });
                }
            }
        );
    });
};

//Подружиться ?
linkservice.create = (linkInfo) => {
    return new Promise((resolve) => {
        personService.getByLogin(linkInfo.login1).then((Person1) => {
            personService.getByLogin(linkInfo.login2).then((Person2) => {
                sql.query(
                    "INSERT INTO links SET Person1_ID = ?, Person2_ID = ?, State = ?, CreateDate = ?, ModifiedDate = ? ",
                    [Person1.Id, Person2.Id, 1, Date.now(), Date.now()],
                    (err) => {
                        if (err) {
                            // eslint-disable-next-line no-console
                            console.log("error: ", err);
                            resolve(linkInfo.login2);
                            return;
                        }

                        resolve(linkInfo.login2);
                    }
                );
            });
        });
    });
};

//раздружиться ?
linkservice.update = (linkInfo) => {
    return new Promise((resolve) => {
        personService.getByLogin(linkInfo.login1).then((Person1) => {
            personService.getByLogin(linkInfo.login2).then((Person2) => {
                sql.query(
                    `UPDATE links SET Person1_ID = ${Person1.Id}, Person2_ID = ${
                        Person2.Id
                    }, State = ${
                        linkInfo.state
                    }, ModifiedDate = ${Date.now()} WHERE Person1_ID in (${Person1.Id}, ${
                        Person2.Id
                    }) AND Person2_ID in (${Person1.Id}, ${Person2.Id})`,
                    (err) => {
                        if (err) {
                            // eslint-disable-next-line no-console
                            console.log("error: ", err);
                            resolve(linkInfo.login2);
                            return;
                        }
                        resolve(linkInfo.login2);
                    }
                );
            });
        });
    });
};

//Вернуть всех друзей и подписчиков, у которых с моей страницей есть связи или были связи(раздружба)
linkservice.getAllFriends = (mylogin) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT * FROM person JOIN  (SELECT links.Person1_ID, links.Person2_ID FROM links WHERE ( links.Person1_ID in (SELECT Id FROM person WHERE person.Login = '${mylogin}') OR links.Person2_ID in ((SELECT Id FROM person WHERE person.Login = '${mylogin}')))) as res WHERE (res.Person1_ID = person.Id OR res.Person2_ID = person.Id) AND person.Login <> '${mylogin}'`,
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
module.exports = linkservice;
