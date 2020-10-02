const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const env = require('custom-env').env();
const mongoose = require('mongoose');
const multer = require('multer');
// const { uuidv4 } = require('uuid');
const { v4: uuidv4 } = require('uuid');

const feetRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');

const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        // cb(null, uuidv4())
        cb(null, uuidv4() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};


app.use(bodyParser.json()); //application/json
app.use(multer({ storage: storage, fileFilter: fileFilter }).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feetRoutes);
app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message: message,
        data: data
    });
});

mongoose.connect(
    MONGODB_URI
)
    .then(result => {
        const server = app.listen(process.env.PORT);
        const io = require('./socket').init(server);
        io.on('connection', socket => {
            console.log('Client conneceted!');
        });

    })
    .catch(err => {
        console.log(err)
    });
