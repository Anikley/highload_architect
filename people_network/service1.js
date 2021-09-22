/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require("express");
const service1 = express();
const router = express.Router();


// Display settings in case of invalid credentials
router.all("*", async (request, response, next) => next());
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// заполнение кеша
const linkService = require(__dirname + "/services/linkservice");
const newsService = require(__dirname + "/services/newsservice");

const NodeCache = require( "node-cache" );
let cache_news_count = new NodeCache({ stdTTL: 100000, checkperiod:600 });
let cache_news_ids = new NodeCache({ stdTTL: 100000, checkperiod:600 });
// id пользователя и количество непрочитанных сообщений - key- value

linkService.getAllPerson().then(allPersons => {
    allPersons.forEach(async (person) => {
        //количество опубликованных сообщений
        const result = await newsService.getNewsByPersonIds((await linkService.getAllFriends(person.Login)).map(x => x.ID).toString());
        // устранение дубликатов сообщений - если запрос добавления пришел дважды
        // нужен кеш добавляемых сообщений - были ли они уже защитаны или нет
        console.log(result);
        const smth = result.find(x => x.count);
        cache_news_count.set(person.ID, smth ? smth.count : 0);
    });
});

// добавление новости
service1.post("/add", urlencodedParser, (request, response) => {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    // у всех друзей подсчитать +1 в количестве сообщений
    // и сохранить id сообщения в кеше
    const friends = request.body.friends.split("&");

    if(cache_news_ids.has(request.body.newMsgId)) return;

    cache_news_ids.set(request.body.newMsgId, 1);

    friends.forEach( friend => {
        const friend_id = friend.split("=")[1];
        if (cache_news_count.has(friend_id)) {
            const newValue = cache_news_count.take(friend_id) + 1;
            cache_news_count.set(friend_id, newValue);
        } else {
            cache_news_count.set(friend_id, 1);
        }
    });
    response.sendStatus(200);
});

// добавление новости
service1.post("/del", urlencodedParser, (request, response) => {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    // у всех друзей подсчитать -1 в количестве ссообщений
    // и удалить id сообщения в кеше
    const friends = request.body.friends.split("&");

    cache_news_ids.take(request.body.newMsgId);

    friends.forEach( friend => {
        const friend_id = friend.split("=")[1];
        if (cache_news_count.has(friend_id)) {
            const oldValue = cache_news_count.take(friend_id);
            const newValue = oldValue >= 1 ? oldValue - 1 : 0;
            cache_news_count.set(friend_id, newValue);
        }
    });

    response.sendStatus(200);
});

// прочитал одной новость или прочитал все новости
service1.post("/change", urlencodedParser, (request, response) => {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);

    if (cache_news_count.has(request.body.id) && all) {
        cache_news_count.take(request.body.id);
        cache_news_count.set(request.body.id, 0);
    }
    if (cache_news_count.has(request.body.id) && !all) {
        const oldValue = cache_news_count.take(request.body.id);
        const newValue = oldValue >= 1 ? oldValue - 1 : 0;
        cache_news_count.set(request.body.id, newValue);
    }

    response.sendStatus(200);
});

service1.get("/get", (request, response) => {
    // console.log(request.query.id);
    // console.log(cache_news_count.get(request.query.id));
    response.json({ data: cache_news_count.get(request.query.id) });
});
// eslint-disable-next-line no-undef
module.exports = service1;
