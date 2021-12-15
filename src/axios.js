const axios = require('axios');

const axiosInstance = axios.create({
     baseURL: "https://tinder-backend-2509.herokuapp.com/"  // should be baseURL
     // baseURL: "http://localhost:5000/"  // should be baseURL
});

module.exports = axiosInstance;