const express = require('express');
const Cors = require('cors');
const mongoose = require('mongoose');
// "type": "module", in package.json for: 
// import express from 'express';
// import mongoose from 'mongoose';
const Cards = require('./db_models/people-model.js')

// App Config
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(Cors());

// DB Config
const connection_uri = 'mongodb+srv://tinder-admin:tinder-admin@tinderdb-cluster.yyngb.mongodb.net/tinderdb?retryWrites=true&w=majority';
mongoose.connect(connection_uri, {}).then(console.log(`Connection to MongoDB Successful`));

// API endpoint routes
app.get("/", (req, res) => {res.status(200).send('Hell World.')});  // status 200 means okay! / fetch from DB successful

app.post('/tinder/card', (req,res) => {
     const tinderCard = req.body;

     Cards.create(tinderCard, (err, data) => {  // error before data
          if(err) res.status(500).send(err);
          else res.status(201).send(`Card Creation Successful!!!`);  // status 201 for successful CREATE
     });
});

app.get('/tinder/card', (req, res) => {
     Cards.find((err, data) => {  // error before data
          if(err) res.status(500).send(err);
          else res.status(200).send(data);
     });
});

// Listen Server
app.listen(port, () => {console.log(`Listening on port: ${port}`)});