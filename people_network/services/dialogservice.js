/* eslint-disable no-console */
const axios = require("axios");

var dialogservice = {};

dialogservice.getAll = async (friends) =>  {
    try {
        return await axios.post("http://localhost:8080/v1/getAll",
            {
                data: friends
            });
    } catch (error) {
        //console.error(error);
        return undefined;
    }
};

dialogservice.create = async (message) =>  {
    try {
        return await axios.post("http://localhost:8080/v1/create",
            {
                data: message
            });

    } catch (error) {
        //console.error(error);
        return undefined;
    }
};


// eslint-disable-next-line no-undef
module.exports = dialogservice;