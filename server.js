var express = require('express')
var app = express()
var Type = require('./database/models').Type;
app.set('port', (process.env.PORT || 8080));
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

app.listen(app.get('port'), function () {
    console.log('App is running on port ' + app.get('port'));
});