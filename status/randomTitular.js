/*jslint node: true, nomen: true, plusplus: true */
'use strict';

//Version 1
//Data
var sujeto = ['El populismo ', 'El programa electoral ', 'El simpatizante '];
var adjetivo1 = ['', 'chavista ', 'Bolivariano ', 'de izquierda radical ', 'comunista '];
var adjetivo2 = ['', 'de venezuela ', 'de la sexta ', 'de twitter ', 'de los sindicatos '];
var verbo = ['apoya ', 'financia ', 'no condena ', 'hace apología ', 'se la pone dura '];
var complementoDirecto = ['la Yihad.', 'la corrupción.', 'la ruptura de España.', 'Eta.', 'los violentos.'];

//Random
var randomSujeto = sujeto[Math.floor(Math.random() * sujeto.length)];
var randomAdjetivo1 = adjetivo1[Math.floor(Math.random() * adjetivo1.length)];
var randomAdjetivo2 = adjetivo2[Math.floor(Math.random() * adjetivo2.length)];
var randomVerbo = verbo[Math.floor(Math.random() * verbo.length)];
var randomComplementoDirecto = complementoDirecto[Math.floor(Math.random() * complementoDirecto.length)];

console.log(randomSujeto + randomAdjetivo1 + randomAdjetivo2 + randomVerbo + randomComplementoDirecto);



//Version 2
//function
//frase = function () {
//	console.log('La frase es:');
//};


//Data
var datosFrase = [
	[
		'El populismo ', 'El programa electoral ', 'El simpatizante '
	],
	[
		'', 'chavista ', 'Bolivariano ', 'de izquierda radical ', 'comunista '
	],
	[
		'', 'de venezuela ', 'de la sexta ', 'de twitter ', 'de los sindicatos '
	],
	[
		'apoya ', 'financia ', 'no condena ', 'hace apología ', 'se la pone dura '
	],
	[
		'la Yihad.', 'la corrupción.', 'la ruptura de España.', 'Eta.', 'los violentos.'
	]
];

//var randomFrase =
//Random
//var randomSujeto = sujeto[Math.floor(Math.random() * sujeto.length)];

//console.log(randomSujeto + randomAdjetivo1 + randomAdjetivo2 + randomVerbo + randomComplementoDirecto);