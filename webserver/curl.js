/*jslint node: true, nomen: true */
'use strict';
var curl = require("curlrequest");

var options = {
	url: 'google.com',
	verbose: true,
	stderr: true
};

curl.request(options, function (err, data) {
	//..
});