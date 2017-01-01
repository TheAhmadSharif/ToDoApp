// var http  = require('http');



// var server = http.createServer(function (request, response) {
// 	response.writeHead(200, {"Content-type": "text/html"});
// 	response.end('<html><body><h1>Hello world !</h1></body></html>');
// });


// server.listen(8200);


var http = require('http');
var fs = require('fs');

const PORT=8200; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});




fs.readFile('./hello.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
