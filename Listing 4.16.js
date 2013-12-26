var a = require('myasserts.js');

function addMethod(object, name, fn) {
	var old = object[name];
	object[name] = function() {
		if (fn.length == arguments.length)
			return fn.apply(this, arguments);
		else if (typeof old == 'function')
			return old.apply(this, arguments);
	};
}

var ninjas = {
	values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};

addMethod(ninjas, "find", function(){
	return this.values;
});

addMethod(ninjas, "find", function(name) {
	var ret = [];
	for (var i = 0; i < this.values.length; i++)
		if (this.values[i].indexOf(name) == 0)
			ret.push(this.values[i]);
	return ret;
});

addMethod(ninjas, "find", function(first, last) {
	var ret = [];
	for (var i = 0; i < this.values.length; i++)
		if (this.values[i] == (first + " " + last))
			ret.push(this.values[i]);
	return ret;
});

a.assert(ninjas.find().length == 3, "Found all ninjas");
a.assert(ninjas.find("Sam").length == 1, "Found ninja by first name");
a.assert(ninjas.find("Dean", "Edwards").length == 1, "Found ninja by first and last name");
a.assert(ninjas.find("Alex", "Russell", "Jr") == null, "Found jack squat.");