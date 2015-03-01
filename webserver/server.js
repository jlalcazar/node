/*jslint node: true, nomen: true */
'use strict';
var http = require("http");

var server = http.createServer();

server.on('request', function (request, response) {

	response.writeHead(200, {
		'Content-Type': 'text/html'
	});

	if (request == "index") {
		response.end("Running");
	} else if (request == "indice") {
		response.end("Funcioando");
	}


}).listen(3000);
console.log('escuchando en el puerto 30000');