var express = require('express');
var fs = require('fs');
require('buffer');

var app = express.createServer(express.logger());
var greeting = fs.readFileSync('./index.html');
var greetStr = greeting.toString();

app.get('/', function(request, response) {
  response.send(greetStr);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
