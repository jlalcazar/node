/*jslint node: true */
"use strict";

var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	response.writeHead(200);
	fs.readFile('./index.html', function (error, contents) {
		console.log(contents);
	});
	response.end();
}).listen(3000);