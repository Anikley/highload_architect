/* eslint-disable no-console */
const axios = require("axios");
const qs = require("qs");

var countunreadservice = {};

/**
 *
 * @param {*} friends id подписчиков, у которых меняем количество непрочитанных сообщений
 * @returns
 */
countunreadservice.add = async (friends, newMsgId) =>  {
    try {
        return await axios.post("http://localhost:9020/add", qs.stringify({"friends": qs.stringify(friends), newMsgId}));

    } catch (error) {
        console.log(error);
        return undefined;
    }
};

countunreadservice.del = async (friends, newMsgId) =>  {
    try {
        return await axios.post("http://localhost:9020/del", qs.stringify({"friends": qs.stringify(friends), newMsgId}));
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

/**
 *
 * @param {*} id id пользователя personId, который читает сообщение
 * @param {*} number количество сообщений которое прочиталось
 * @param {*} all признак того что нужно всё очистить
 * @returns
 */
countunreadservice.change = async (id, number, all = false) =>  {
    try {
        return await axios.post("http://localhost:9020/change", qs.stringify({ id, number, all }));

    } catch (error) {
        console.error(error);
        return undefined;
    }
};

countunreadservice.get = async (id) =>  {
    try {
        return await axios.get(`http://localhost:9020/get?id=${id}`);

    } catch (error) {
        console.error(error);
        return undefined;
    }
};

// eslint-disable-next-line no-undef
module.exports = countunreadservice;