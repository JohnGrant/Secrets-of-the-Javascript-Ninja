exports.myassert = function assert(condition, message) {
	var prepend = condition ? "PASS: " : "FAIL: "
	console.log(prepend + message);
};