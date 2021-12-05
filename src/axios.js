const axios = require('axios');

const axiosInstance = axios.create({
     baseURL: "https://tinder-clone-2509.herokuapp.com/"  // should be baseURL
});

module.exports = axiosInstance;