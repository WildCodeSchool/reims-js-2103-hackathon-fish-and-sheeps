require('dotenv').config();

const express = require('express');

const api = require('./api');
const app = express();


app.use(express.json());
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('hello from Express');
});

module.exports = app;
