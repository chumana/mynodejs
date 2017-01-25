var express = require('express')
var app = express()
var Type = require('./database/models').Type;

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/users', function (req, res) {
  res.send('Hello World 2')
});
app.get('/types', function (req, res) {
	Type.findAll().then(function(obj){
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(obj));
	});
});


app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
});