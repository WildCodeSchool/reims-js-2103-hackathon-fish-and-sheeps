const express = require('express');

const api = require('./api');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use('/videos', express.static('videos'));
app.use(cors());
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('hello from Express');
});

module.exports = app;
