/*jslint node: true, nomen: true */
'use strict';
module.exports = function (server) {

	server.get('/index', function (req, res) {
		res.render('login', {
			title: 'Express Login'
		});
	});

	//other routes..
};