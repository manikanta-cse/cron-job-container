
'use strict'


var express = require('express');
var app = express();
var PORT = 8090;

app.get('/health', function (req, res) {

    res.send(JSON.stringify({ "message": "UP" }));

});


app.listen(PORT);
console.log('Server Running on ' + PORT);
