const jwt = require("jsonwebtoken");
const app = require("./../app");
const personalInformationService = require("./personalinformationservice");
const authservice = {};

authservice.generateToken = (person) => {
    const data = {
        login: person.login,
    };
    const signature = "MySuP3R_z3kr3t";
    const expiration = "6h";

    return jwt.sign({ data }, signature, { expiresIn: expiration });
};

authservice.verify = (request, response, isAuth) => {
    jwt.verify(request.cookies.sstoken, "MySuP3R_z3kr3t", (err, decoded) => {
        if (err) {
            return null;
        } else if (decoded && isAuth) {
            authservice.isMyAccount(request).then((result) => {
                if (result.IsMy) {
                    personalInformationService
                        .getByLogin(request.params.login, request.params.login)
                        .then((result) => {
                            // eslint-disable-next-line no-console
                            console.log(result);
                            app.userPersonalInformationCallback(result, {
                                request,
                                response,
                            });
                        })
                        .catch((error) => {
                            // eslint-disable-next-line no-console
                            console.log(error);
                            response.sendStatus(500);
                        });
                }
            });
        } else if (decoded && !isAuth) {
            return;
        }
    });
};

authservice.isMyAccount = (req) => {
    return new Promise((resolve) => {
        jwt.verify(req.cookies.sstoken, "MySuP3R_z3kr3t", (err, decoded) => {
            if (!err && decoded) {
                if (decoded.data.login == req.params.login) {
                    resolve({ IsMy: true, Login: decoded.data.login });
                }
                resolve({ IsMy: false, Login: decoded.data.login });
            }
            resolve({ IsMy: false, Login: decoded.data.login });
        });
    });
};

// eslint-disable-next-line no-undef
module.exports = authservice;
