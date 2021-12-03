const axios = require('axios');

const axiosInstance = axios.create({
     baseURL: "https://localhost:5000/"  // should be baseURL
});

module.exports = axiosInstance;