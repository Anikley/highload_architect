const express = require("express");
const app = express();
const router = express.Router();
const moment = require("moment");

// Display settings in case of invalid credentials
router.all("*", async (request, response, next) => next());

var cookieParser = require("cookie-parser");
app.set("view engine", "pug");
app.set("views", __dirname + "/views/");
app.use(cookieParser("123"));

// var options = {
//   maxAge: '1d',
//   redirect: false
// }

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + "/public"));
var helper = require(__dirname + "/helper");

const personService = require(__dirname + "/services/personservice");
const personalInformationService = require(__dirname +
  "/services/personalinformationservice");
const linkService = require(__dirname + "/services/linkservice");
const authService = require(__dirname + "/services/authservice");

/**
 * Проверка введенного пароля
 * Логин и пароль
 */
app.post("/register", urlencodedParser, (request, response) => {
    if (!request.body || !request.body.login || !request.body.password)
        return response.sendStatus(400);

    authService.verify(
        request,
        response,
        "http://" + request.headers.host + "/account/"
    );

    personService.verify(request.body.login).then((result) => {
        let res = JSON.parse(JSON.stringify(result));
        let decodepassword = helper.decrypt({ encryptedData: res[0].Password });

        if (!res.length) {
            return response.redirect("http://" + request.headers.host + "/");
        } else if (decodepassword === request.body.password) {
            var jwtToken = authService.generateToken({
                login: request.body.login,
                password: request.body.password,
            });
            response.cookie("sstoken", jwtToken);
            return response.redirect(
                "http://" + request.headers.host + "/account/" + request.body.login
            );
        } else {
            return response.sendStatus(400);
        }
    });
});

app.post("/createPerson", urlencodedParser, (request, response) => {
    if (!request.body) return response.sendStatus(400);

    //проверки вводимых данных
    if (request.body.password !== request.body.repeatPassword) {
        response.sendStatus(404);
    }

    //todo
    //1. проверка почты на соответствие шаблону
    //2. возврат ошибок на форму

    const decodepassword = helper.encrypt(request.body.password);

    personService
        .create({
            Login: request.body.login.replace(/[^a-zA-ZА-Яа-я]/g, ""),
            Password: decodepassword.encryptedData,
            Email: request.body.email.replace(/[^a-zA-ZА-Яа-я0-9@]/g, ""),
            CreateDate: new Date().getTime(),
            ModifiedDate: new Date().getTime(),
            DeleteDate: null,
        })
        .then((result) => {
            createCallback(result, request, response);
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
            response.sendStatus(500);
        });
});

app.post("/createRels", urlencodedParser, (request, response) => {
    if (!request.body) return response.sendStatus(400);

    var links = request.body;

    if (links.friendsState == 1 || links.friendsState == 2) {
        linkService
            .update({
                login1: links.myLogin,
                login2: links.login,
                state: links.friendsState == 1 ? 2 : 1,
            })
            .then((path) => {
                response.redirect(
                    "http://" + request.headers.host + "/account/" + path
                );
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                response.sendStatus(500);
            });
    } else if (links.friendsState == 0) {
        linkService
            .create({
                login1: links.myLogin,
                login2: links.login,
                state: 1,
            })
            .then((path) => {
                response.redirect(
                    "http://" + request.headers.host + "/account/" + path
                );
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                response.sendStatus(500);
            });
    }
});

app.get("/signUp", (request, response) => {
    response.render("signUp");
});

app.get("/find", (request, response) => {
    response.render("find");
});

app.get("/", (request, response) => {
    authService.verify(request, response, true);

    response.render("login", { err: "" });
});

app.get("/account/:login", (request, response) => {
    authService.isMyAccount(request).then((result) => {
        if (result.IsMy) {
            personalInformationService
                .getByLogin(request.params.login, request.params.login)
                .then((result) => {
                    // eslint-disable-next-line no-console
                    console.log(result);
                    userPersonalInformationCallback(result, { request, response });
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                    response.sendStatus(500);
                });
        } else {
            personalInformationService
                .getByLogin(request.params.login, result.Login)
                .then((result) => {
                    anotherPersonalInformationCallback(
                        result,
                        { request, response },
                        { login: request.params.login, anotherlogin: result.Login }
                    );
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                    response.sendStatus(500);
                });
        }
    });
});

app.get("/list/:account", (request, response) => {
    authService.verify(
        request,
        response,
        "http://" + request.headers.host + "/list/" + request.params.account,
        false
    );
    personService.getAll(request.params.account).then((result) => {
        response.render("list", {
            listOfPersons: JSON.parse(JSON.stringify(result)),
            url: "./account",
        });
    });
});

// test задание на баланстровку нагрузки
app.get("/friends/flaviy_brazgovka", (request, response) => {
    linkService.getAllFriends("flaviy_brazgovka").then((result) => {
        response.render("friends", {
            listOfPersons: JSON.parse(JSON.stringify(result)),
            url: "./account",
        });
    });
});

app.get("/friends/:account", (request, response) => {
    authService.verify(
        request,
        response,
        "http://" + request.headers.host + "/friends/" + request.params.account,
        false
    );
    linkService.getAllFriends(request.params.account).then((result) => {
        response.render("friends", {
            listOfPersons: JSON.parse(JSON.stringify(result)),
            url: "./account",
        });
    });
});

// обновление пользовательской информации в таблице PersonInformation
app.post("/personUpdate", urlencodedParser, (request, response) => {
    if (!request.body) return response.sendStatus(400);
    let pInfo = request.body;

    const gender =
    pInfo.gender === "Женский" ? 1 : pInfo.gender === "Мужской" ? 0 : null;
    const birthdate = moment(pInfo.birth).format();

    personalInformationService
        .create(
            {
                PersonId: pInfo.personId,
                Name: pInfo.name.replace(/[^a-zA-ZА-Яа-я]/g, ""),
                LastName: pInfo.lastName.replace(/[^a-zA-ZА-Яа-я]/g, ""),
                Patronymic: pInfo.patronymic.replace(/[^a-zA-ZА-Яа-я]/g, ""),
                Birth: birthdate,
                Town: pInfo.town.replace(/[^a-zA-ZА-Яа-я0-9]/g, ""),
                Gender: gender,
                Hobbies: pInfo.hobbies.replace(/[^a-zA-ZА-Яа-я,]/g, ""),
            },
            pInfo.login
        )
        .then((result) => {
            updatePersonInformationCallback(
                result === null,
                { request, response },
                result
            );
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
            response.sendStatus(500);
        });
});

const anotherPersonalInformationCallback = (
    data,
    sender,
    { login, anotherlogin }
) => {
    var json = JSON.parse(JSON.stringify(data));
    if (json.length) {
        linkService.isFriend(login, anotherlogin).then((result) => {
            const gender =
        json[0].Gender === 0
            ? "Мужской"
            : json[0].Gender === 1
                ? "Женский"
                : "";
            sender.response.render("another_account", {
                Login: json[0].Login,
                MyLogin: anotherlogin,
                Name: json[0].Name,
                LastName: json[0].LastName,
                Patronymic: json[0].Patronymic,
                Birth: moment(json[0].Birth).format("l"),
                Town: json[0].Town,
                Gender: gender,
                Hobbies: json[0].Hobbies,
                FriendsState: result.state,
            });
        });
    } else {
        linkService.isFriend(login, anotherlogin).then((result) => {
            sender.response.render("another_account", {
                Login: sender.request.params.login,
                Name: "",
                LastName: "",
                Patronymic: "",
                Birth: "",
                Town: "",
                Gender: "",
                Hobbies: "",
                FriendsState: result.state,
                MyLogin: anotherlogin,
            });
        });
    }
};

const userPersonalInformationCallback = (data, sender) => {
    var json = JSON.parse(JSON.stringify(data));
    if (json.length) {
        const gender =
      json[0].Gender === 0 ? "Мужской" : json[0].Gender === 1 ? "Женский" : "";

        sender.response.render("account", {
            Login: json[0].Login,
            Name: json[0].Name,
            LastName: json[0].LastName,
            Patronymic: json[0].Patronymic,
            Birth: moment(json[0].Birth).format("l"),
            Town: json[0].Town,
            Gender: gender,
            Hobbies: json[0].Hobbies,
        });
        return;
    }

    sender.response.render("account", {
        Login: sender.request.params.login,
        Name: "",
        LastName: "",
        Patronymic: "",
        Birth: "",
        Town: "",
        Gender: "",
        Hobbies: "",
    });
};

const createCallback = (data, request, response) => {
    if (data) {
    // todo
    // убрать password

        var jwtToken = authService.generateToken({
            login: data.Login,
            password: data.Password,
        });
        response.cookie("sstoken", jwtToken);
        response.redirect("http://" + request.headers.host);
    }
};

const updatePersonInformationCallback = (err, sender, data) => {
    if (err) return sender.response.sendStatus(500);
    return sender.response.redirect(
        "http://" + sender.request.headers.host + "/account/" + data.Login
    );
};

// eslint-disable-next-line no-undef
module.exports = app;
