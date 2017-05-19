const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const config = require('./config');
const reply = require('./reply');
/*const actionBasic = require('./action/basic');
const actionHelp = require('./action/help');
const actionEnjoy = require('./action/enjoy');*/

var app = express();

app.use(bodyParser.json());

app.post