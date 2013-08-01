
assert = require('myasserts.js').assert;

var store = {
	nextId: 1,

	cache: {},

	add: function(fn) {
		if (!fn.id) {
			fn.id = store.nextId++;
			return !!(store.cache[fn.id] = fn);
		}
	}
};

function ninja(){}

assert(store.add(ninja), "Function was safely added.");
assert(!store.add(ninja), "But it was only added once.");