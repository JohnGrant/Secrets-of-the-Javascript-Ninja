var values = [213, 16, 78, 33, 11, 11, 3, 111111111111111111];

var sortAsc = function(a, b) {
	return a - b
};

var sortDesc = function(a, b) {
	return b - a
};


console.log(values.sort(sortAsc));
console.log(values.sort(sortDesc));


for (var i = 10000000000; i >= 0; i--) {};