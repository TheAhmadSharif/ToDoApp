var http  = require('http');
var express = require('express');

var app = express();

app.use(express.static('public'));
app.listen(8800, function () {
	console.log('Listening from 8800 Port')
});


