/* eslint-disable no-console */
const NodeCache = require( "node-cache" );
const personservice = require("./personservice");
const kafka = require("kafka-node");

var newsservice = {};

//кеш
let cache_news = new NodeCache({ stdTTL: 100000, checkperiod:600 });

let cache_friends = new NodeCache({ stdTTL: 100000, checkperiod:600 });

const KafkaClient = new kafka.KafkaClient("localhost:2181", "localhost:9092" );

newsservice.reconfugureCash = (settings) => {
    if (settings.resfreshcash === 1) {
        cache_friends = new NodeCache({ stdTTL: settings.peoplestdTTL, checkperiod: settings.peoplecheckperiod });
        cache_news = new NodeCache({ stdTTL: settings.newsstdTTL, checkperiod: settings.newscheckperiod });
    }
};

newsservice.getCachedFriendsByPersonLogin = (login) => {
    if (cache_friends.has(login)) {
        return (cache_friends.get(login)).friends;
    } else {
        return undefined;
    }
};

newsservice.setCachedFriendsByPersonLogin = (login, obj) => {
    if (!cache_friends.has(login)) {
        cache_friends.set(login, { friends: obj});
    }
};


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
    return new Promise(async (resolve, reject) => {
        try {

            const producer = new kafka.Producer(KafkaClient);

            const message = JSON.stringify({
                Id: newsservice.uuidv4(),
                Refid: 0,
                Topic: topic, // заголовок сообщения
                Item: newsitem, // тело сообщения
                DateTime: "0/0/0000 12:00:00 AM",
                State: "0",
                PersonId: person.Id.toString(), // автор
            });

            KafkaClient.refreshMetadata(
                ["messages"],
                (err) => {
                    if (err) {
                        resolve(false);
                        throw err;
                    }

                    producer.send(
                        [{ topic: "messages", messages: message }],
                        (err, result) => {
                            console.log(err || result);
                            resolve(true);
                        }
                    );
                }
            );
        }
        catch (err) {
            console.log("error: ", err);
            reject(err);
            return;
        }
    });
};

// получить из кеша ленту обновлений
newsservice.getCachedNews = () => {
    if (cache_news.has("messages")) {
        return cache_news.get("messages");
    }
    else {
        return undefined;
    }
};

/**
 * Выбрать все новости для пользователя
 * consumerGroup - чьи топики читаем
 * каждый топик отвечает за автора обновлений
 */
newsservice.getAll = function* () {
    try {
        const options = {
            autoCommit: false,
        };

        // чтение всех сообщений разом и фильтрация только в момент создания ленты
        const consumer =  new kafka.Consumer(KafkaClient, [{ topic: "messages", partition: 0 }], options);

        consumer.on("message", (data) => {
            console.log("get data from topic");
            console.log(data.value);

            if (!cache_news.has("messages")) {
                cache_news.set("messages", { ms: [JSON.parse(data.value)] });
            } else {
                // пересоздавать кеш обновлять
                // инвалидация кеша специально
                const oldNews = cache_news.take("messages");
                const updatedNews = [].concat([JSON.parse(data.value)], oldNews.ms);
                cache_news.set("messages", { ms: updatedNews });
            }
        });
        yield "collect";
        return "result";
    }
    catch (err ) {
        console.log("error: ", err);
    }
};

// eslint-disable-next-line no-undef
module.exports = newsservice;