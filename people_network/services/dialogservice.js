/* eslint-disable no-console */
const axios = require("axios");

var dialogservice = {};

dialogservice.getAll = (friends) =>  {
    console.log(friends);
    try {
        return axios.post("http://localhost:9010/v1/getAll",
            {
                data: friends
            });
    } catch (error) {
        console.error(error);
    }
};

dialogservice.create = (message) =>  {
    try {
        return axios.post("http://localhost:9010/v1/create",
            {
                data: message
            });

    } catch (error) {
        console.error(error);
    }
};


// eslint-disable-next-line no-undef
module.exports = dialogservice;