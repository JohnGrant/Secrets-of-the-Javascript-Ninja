var test_zero_args = function() {


};

console.log(test_zero_args.length);

var test_one_args = function(one) {

};

console.log(test_one_args.length);

console.log(test_zero_args.prototype.toString());

console.log(Object.prototype.toString.call(test_zero_args));