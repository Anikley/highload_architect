/* eslint-disable no-undef */
/* eslint-disable no-console */
console.log("ws connected");

// hack
// todo нужно также проверять cookie что пользователь авторизован

var login = (document.URL.split("/")[4]);

let socket = new WebSocket("ws://localhost:5000/" + login, "echo-protocol");

socket.onopen = function(e) {
    console.log(e);
    socket.send("ping");
};

socket.onmessage = function(event) {
    localStorage.setItem("lenta", event.data);
    // обработка варианта изменения данных
    // релоад если есть изменения для текущего логина
    if (event.data.length !== parseInt(localStorage.getItem("reloadSign"))) {

        localStorage.setItem("reloadSign", event.data.length.toString());

        window.location.reload();
    }
};