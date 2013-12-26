var assert = require('myasserts.js').assert;

function make(name) {}
function make2(name, rank) {}
assert(make.length == 1, "Only expecting a single argument");
assert(make2.length == 2, "Expecting two arguments");