/* eslint-disable no-console */

const personservice = require("./personservice");
const kafka = require("kafka-node");

var newsservice = {};

const KafkaClient = new kafka.KafkaClient("localhost:2181", "localhost:9092" );

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

// eslint-disable-next-line no-undef
module.exports = newsservice;