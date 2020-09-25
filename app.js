const express = require('express');
const bodyParser = require('body-parser');
const env = require('custom-env').env();
const mongoose = require('mongoose');


const feetRoutes = require('./routes/feed');

const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
});

app.use('/feed', feetRoutes);

mongoose.connect(
    MONGODB_URI
)
    .then(result => {
        app.listen(process.env.PORT);
    })
    .catch(err => {
        console.log(err)
    });
