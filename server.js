var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 9000;
var messages = [];
app.get('/', function(req, res) {
    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send(JSON.stringify(messages));
});
app.listen(port, function() {
    console.log("Listening on port ", port);
});
app.use(bodyParser.json());
app.post('/', function(req, res) {
    console.log(req.body);
    messages.push({
      message: req.body.message,
      time: new Date()
    });

    res.status(200).set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send(JSON.stringify(messages));
});
app.options('/', function(req, res) {
    res.status(200).set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }).send(JSON.stringify(messages));
});
