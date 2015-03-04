/*jslint node: true, nomen: true */
'use strict';
var http = require("http");

var server = http.createServer();
//require('./routes')(server);

server.on('request', function (request, response) {

	response.writeHead(200, {
		'Content-Type': 'text/html'
	});

	console.log(response);



}).listen(80);
console.log('escuchando en el puerto 80');
