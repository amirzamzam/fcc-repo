// server.js
// where your node app starts

// init project
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


var app = module.exports = express();
app.user(bodyParser.json());
app.use(cors());