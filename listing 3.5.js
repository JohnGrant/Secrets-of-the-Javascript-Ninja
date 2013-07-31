var a = require('myasserts.js');

function juggle() {
	var result = 0;
	for (var n = 0; n < arguments.length; n++) {
		result += arguments[n];
	}
	this.result = result;
}

var ninja1 = {};
var ninja2 = {};
 
 juggle.apply(ninja1,[1,2,3,4]);
 juggle.call(ninja2,2,5,6,7,8);

 a.assert(ninja1.result === 10, "juggled via apply");
 a.assert(ninja2.result === 28, "juggled via call");