var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(6060);
app.get('/getUser',function (req,res) {
res.send([{name:'zhpx',age:8}])
});
app.post('/postUser',function (req,res) {
    console.log(req.body);
    res.send(req.body);
});
app.get('/',function (req,res) {
    res.sendfile('./get.html',{root:__dirname})
    
});

