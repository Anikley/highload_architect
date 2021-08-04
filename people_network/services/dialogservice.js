/* eslint-disable no-console */
const axios = require("axios");

var dialogservice = {};

dialogservice.getAll = (friends) =>  {
    try {
        return axios.post("http://localhost:8080/v1/getAll",
            {
                data: friends
            });
    } catch (error) {
        console.error(error);
    }
};

dialogservice.create = (message) =>  {
    try {
        return axios.post("http://localhost:8080/v1/create",
            {
                data: message
            });

    } catch (error) {
        console.error(error);
    }
};


// eslint-disable-next-line no-undef
module.exports = dialogservice;