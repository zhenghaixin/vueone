var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(6060);
app.get('/',function (req,res) {
    res.sendfile('./15.html',{root:__dirname})
});

