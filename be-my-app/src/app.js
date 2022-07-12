const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

app.use('/books', booksRouter);

mongoose.connect('mongodb://localhost:27017/admin',
    (event) => {
        console.log('Connect to database')
    })
    .catch((err) => console.log(err));

app.listen(4000);