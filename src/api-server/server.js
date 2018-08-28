'use strict'

var express = require('express');
var app = express();

var env = process.env.ENVIRONMENT || 'preprod';

var config = require('./config/config')[env];

require('./config/express')(app);
var esConfig= require('./config/es')(config);

require('./routes')(app,esConfig);

app.listen(config.node_port);
console.log('Express server Running on ' + config.node_port);
