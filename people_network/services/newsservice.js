/* eslint-disable no-const-assign */
/* eslint-disable no-console */

const personservice = require("./personservice");
const dialogservice = require("./dialogService");
const linkservice = require("./linkservice");
const sql = require("../db");
const countunreadservice = require("./countunreadservice");
const SagaManager = require("../saga/sagamanager");

var newsservice = {};

newsservice.uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

/**
 * Создать новость для пользователя
 */
newsservice.create = async ({ topic, newsitem, login }) => {

    const newMsgId =  newsservice.uuidv4();
    const person =  await personservice.getByLogin(login);
    const message = {
        Id: newMsgId,
        Refid: 0,
        Topic: topic, // заголовок сообщения
        Item: newsitem, // тело сообщения
        //DateTime: "0/0/0000 12:00:00 AM",
        State: "0",
        PersonId: person.Id.toString(), // автор
    };

    /// Выполнение саги для создания сообщения
    await SagaManager.Run([{
        transactionTitle: "выбрать список подписчиков",
        transactiontype: "1", // если база не доступна или какие-то проблемы, то не делаем ничего
        onErrors: () => {throw "ошибка создания сообщения1"; },
        onSuccess: () => console.log("создание сообщения выполнено1"),
        // eslint-disable-next-line no-unused-vars
        onExecute: async (items) => {
            return (await linkservice.getAllFriends(login)).map(x => x.ID.toString());
        },
    },
    {
        transactionTitle: "сохранить в бд сообщение с 0 статусом",
        transactiontype: "1", // если база не доступна или какие-то проблемы, то не делаем ничего
        onSuccess: () => console.log("создание сообщения выполнено2"),
        onErrors: () => {throw "ошибка создания сообщения2"; },
        // eslint-disable-next-line no-unused-vars
        onExecute: async (items) => {
            await dialogservice.create(message);
            return [];
        },
    },
    {
        transactionTitle: "увеличить счетчик сообщений у всех подписчиков",
        transactiontype: "2", // если сервис не доступен делаем retry этого типа до успеха
        onErrors: () => console.log("ошибка создания сообщения3"),
        onSuccess: () => console.log("создание сообщения выполнено3"),
        onExecute: async (items) => {
            return await countunreadservice.add(items, newMsgId); // пробуем ещё раз до успеха
        },
    },
    {
        transactionTitle: "изменить тип сообщения на 1 -- опубликовано",
        // откатываем в случае ошибки предыдущий вариан и повторяем предыдущи шаг
        transactiontype: "2", // если сервис не доступен делаем retry этого типа до успеха
        onErrors: async (items) => { return await countunreadservice.del(items, newMsgId); },
        onSuccess: () => console.log("создание сообщения выполнено4"),
        // eslint-disable-next-line no-unused-vars
        onExecute: async (items) => {
            //await newsservice.prepare(newMsgId);
            const result = await newsservice.changestate(newMsgId);
            return result.affectedRows;
        }
    }]);
};

newsservice.changestate = async (messageid) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `UPDATE news SET state='1' WHERE id IN ('${messageid}')`,
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


newsservice.getNewsByPersonIds =  async (personids) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT COUNT(*) as count FROM news where state = '1' AND personid IN (${personids})`,
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
module.exports = newsservice;


