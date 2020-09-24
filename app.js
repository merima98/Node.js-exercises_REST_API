const express = require('express');
const bodyParser = require('body-parser');
const env = require('custom-env').env();


const feetRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); //application/json

app.use('/feed', feetRoutes);

app.listen(process.env.PORT);