const axios = require('axios');

const axiosInstance = axios.create({
     // baseURL: "https://tinder-clone-2509.herokuapp.com/"  // should be baseURL
     // baseURL: "http://localhost:5000/"  // should be baseURL
     baseURL: "mongodb+srv://tinder-admin:tinder-admin@tinderdb-cluster.yyngb.mongodb.net/tinderdb?retryWrites=true&w=majority"  // should be baseURL
});

module.exports = axiosInstance;