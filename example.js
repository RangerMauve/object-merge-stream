var streamArray = require("stream-array");
var stdout = require("stdout");
var mergeStream = require("./");

var data = [{
	foo: "bar"
}, {
	baz: {
		fizz: "buzz"
	}
}, {
	baz: {
		qux: "norf"
	}
}];

streamArray(data)
	.pipe(mergeStream())
	.pipe(stdout());

/*
{ foo: 'bar' }
{ foo: 'bar', baz: { fizz: 'buzz' } }
{ foo: 'bar', baz: { fizz: 'buzz', qux: 'norf' } }
 */
