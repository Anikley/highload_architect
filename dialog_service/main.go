package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"strings"

	"github.com/gin-gonic/gin"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/segmentio/kafka-go"
	"time"
    "github.com/prometheus/client_golang/prometheus"
    "github.com/prometheus/client_golang/prometheus/promauto"
    "github.com/prometheus/client_golang/prometheus/promhttp"
)

// the topic and broker address are initialized as constants
const (
	topic          = "messages"
	broker1Address = "172.18.0.5:29092"
)

const (  
    username = "b920a6ea8abe3c"
    password = "4830f1fc"
    hostname =  "us-cdbr-east-04.cleardb.com"
    dbname   = "heroku_f4fda1262322f10"
)

func recordMetrics() {
        go func() {
                for {
                        opsProcessed.Inc()
                        time.Sleep(2 * time.Second)
                }
        }()
}

var (
        opsProcessed = promauto.NewCounter(prometheus.CounterOpts{
                Name: "myapp_processed_ops_total",
                Help: "The total number of processed events",
        })
)


func main() {
  r := gin.Default()
   
  recordMetrics()
  // mysql connection
  connectionString := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8", username, password, hostname, dbname)
  // listen kafka
  ctx := context.Background()
  go consume(ctx, connectionString)

  r.GET("/metrics", func (c *gin.Context) {
	  h := promhttp.Handler()
	  log.Println("gettings metrics")
	  h.ServeHTTP(c.Writer, c.Request)
  })

  r.POST("/v1/getAll", func(c *gin.Context) {
	body := c.Request.Body
	x, _ := ioutil.ReadAll(body)
	log.Println("/getAll with" + string(x))

	idsArray := strings.Split(string(x), ":")

	ids := strings.ReplaceAll(idsArray[1], "\"", "")
	ids = strings.ReplaceAll(ids, "}", "")

	var result []Message
	db, err := sql.Open("mysql", connectionString)
    defer db.Close()
	log.Println("open db connection: " + connectionString)
	if err != nil {
		log.Fatal(err)
	}
	sqlRaw := fmt.Sprintf(`SELECT id, refid, topic, item, state, personid FROM news where personid IN (%s)`, ids)
	log.Println("try execute query: " + sqlRaw)
	results, err := db.Query(sqlRaw)
	db.Close()


    for results.Next() {
        var tag Message
        err = results.Scan(&tag.Id,&tag.Refid, &tag.Topic, &tag.Item, &tag.State, &tag.PersonId)
        if err != nil {
            log.Fatal(err.Error())
        }
		result = append(result, tag)
    }
    bytes, _:= json.Marshal(result)
    log.Println("parsing sql-query result is successful")
    c.JSON(http.StatusOK, gin.H{"value": string(bytes)})
  })

  
  r.POST("/v1/create", func(c *gin.Context) {
  	body := c.Request.Body
  	x, _ := ioutil.ReadAll(body)
  	fmt.Println("Request create message: " + string(x))

  	// todo решить проблему парсинга переданного сообщения
  	parseMsg := strings.ReplaceAll(string(x), "{\"data\":", "")
    parseMsg = strings.ReplaceAll(parseMsg, "}}", "")
    parseMsg = strings.ReplaceAll(parseMsg, "{", "")
	parseMsg = strings.ReplaceAll(parseMsg, "\"", "")
 	messageParts := strings.Split(parseMsg, ",")
 	//

  	message := Message {
  		Id: strings.Split(messageParts[0], ":")[1],
  		Refid: 0,
  		Topic: strings.Split(messageParts[2], ":")[1],
  		Item: strings.Split(messageParts[3], ":")[1],
  		State: strings.Split(messageParts[4], ":")[1],
  		PersonId: strings.Split(messageParts[5],":")[1],
  	}
  	produce(ctx, message)
    c.JSON(http.StatusOK, gin.H{"value": true })
  })

  r.Run()
}

func produce(ctx context.Context, message Message) {
	w := kafka.NewWriter(kafka.WriterConfig{
		Brokers: []string{broker1Address},
		Topic:   topic,
	})

	bytes, err := json.Marshal(message)
	if err != nil {
		log.Fatal("encode error:", err)
	}

	err = w.WriteMessages(ctx, kafka.Message{
		Key: []byte("0"),
		Value: bytes,
	})
	if err != nil {
			panic("could not write message " + err.Error())
		}

}

func consume(ctx context.Context, connectionString string) {
	// read kafka topic
	r := kafka.NewReader(kafka.ReaderConfig{
		Brokers: []string{broker1Address},
		Topic:   topic,
	})
	logMsg := fmt.Sprintf(`kafka options: '%s', %s`, broker1Address, topic)
	log.Println(logMsg)
	for {
		msg, err := r.ReadMessage(ctx)
		if err != nil {
			fmt.Println("could not read message " + err.Error())
		}
		// сохранение в бд
		var m Message
		json.Unmarshal(msg.Value, &m)
		if !(m.Id != "") {
			fmt.Println("could not parse kafka message")
			continue
		}

		db, err := sql.Open("mysql", connectionString)
		defer db.Close()
		sqlRaw := fmt.Sprintf(`INSERT INTO news (id, refid, topic, item, state, personid) VALUES ('%s', %d, '%s', '%s', '%s', '%s')`, m.Id, m.Refid, m.Topic, m.Item, m.State, m.PersonId)
		log.Println("try to execute " + sqlRaw)
		result, err := db.Query(sqlRaw)
		if err != nil {
			fmt.Println("could not execute sql:  " + err.Error())
		}
		db.Close()
		fmt.Println("sql insert result: ", result)
	}
}

type Message struct {
	Id   string  `json:"Id"`
	Refid int    `json:"Refid"`
	Topic string `json:"Topic"`
	Item string  `json:"Item"`
	//DateTime string `json:"DateTime"`
	State string  `json:"State"`
	PersonId string `json:"PersonId"`
}
