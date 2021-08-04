/* eslint-disable no-console */

const personservice = require("./personservice");
const dialogservice = require("./dialogService");

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
    const person =  await personservice.getByLogin(login);
    const message = {
        Id: newsservice.uuidv4(),
        Refid: 0,
        Topic: topic, // заголовок сообщения
        Item: newsitem, // тело сообщения
        //DateTime: "0/0/0000 12:00:00 AM",
        State: "0",
        PersonId: person.Id.toString(), // автор
    };

    dialogservice.create(message);
};

// eslint-disable-next-line no-undef
module.exports = newsservice;