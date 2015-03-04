/*jslint node: true, nomen: true */
'use strict';

var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var file = fs.createReadStream('pipeweb.js');
	file.pipe(response);
}).listen(80);