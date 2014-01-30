var NS = {};
NS.Girl = function() {
	this.herName = function() {
		return "My girl's name is Joanna"
	};
};

var instance = new NS.Girl();
NS.Girl.prototype.herName = function() {
	return "No it is Jordan";
};
console.log(instance.herName());