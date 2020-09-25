const express = require('express');
const bodyParser = require('body-parser');
const env = require('custom-env').env();


const feetRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
});

app.use('/feed', feetRoutes);

app.listen(process.env.PORT);