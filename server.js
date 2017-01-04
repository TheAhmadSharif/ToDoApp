var http  = require('http');
var express = require('express');

var app = express();

app.use(express.static('public'));



app.get('/', function (req, res){
	res.send('index.html');
	res.end();
});
app.listen(8800, function () {
	console.log('Listening from 8800 Port')
});




