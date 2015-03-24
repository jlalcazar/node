/*jslint node: true, nomen: true */
'use strict';

var http = require("http");
var auth = require('http-auth');

var basic = auth.basic({
	realm: "Leftronic"
}, function (username, password, callback) { // Custom authentication method. 
	callback(username === "uno" && password === "dos");
});

// Creating new HTTP server. 
http.createServer(basic, function (req, res) {
	res.end("Welcome to private area - " + req.user + "!");
}).listen(8192);