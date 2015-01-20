var through2 = require("through2");
var extend = require("object-merge");

module.exports = mergerStream;

/**
 * Creates a stream that merges objects together and outputs them each step
 * @param {Object} state Optional initial state for the object
 */
function mergerStream(state, options) {
	state = state || {};
	options = extend.createOptions(options || {});
	return through2.obj(function (chunk, encoding, cb) {
		cb(null, state = extend(options, state, chunk));
	});
}
