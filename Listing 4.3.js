var a = require('myasserts.js');
a.assert(true,'test');

var obj = {};
var fn = function() {}
a.assert(obj && fn, "Both object and function exist");
