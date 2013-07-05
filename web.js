var express = require('express');
var fs = require('fs');
var buf = require('buf');

var app = express.createServer(express.logger());
var greeting = fs.readFileSync('./index.html');
var greetStr = buf.toString(greeting);

app.get('/', function(request, response) {
  response.send(greetStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
