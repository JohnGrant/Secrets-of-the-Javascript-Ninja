var a = require('myasserts.js');

function chirp(n) {
	return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
}

a.assert(chirp(2) == 'chirp-chirp', 'Calling the named function comes naturally');