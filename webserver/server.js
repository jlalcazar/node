/*jslint node: true, nomen: true */
'use strict';
var http = require("http");

var server = http.createServer();

server.on('request', function (request, response) {

	response.writeHead(200, {
		'Content-Type': 'text/html'
	});

	//console.log(response);
	if (request == "index") {
		response.end("Running");
	} else if (request == "indice") {
		response.end("Funcioando");
	} else {
		response.end("Otro");
	}


}).listen(80);
console.log('escuchando en el puerto 80');