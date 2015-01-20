# object-merge-stream

Takes in a stream of objects and merges them together, outputting every time the state updates.

## API

### `mergeStream([state],[options])`

Creates a new Transform stream which takes in objects, merges them, and outputs
on every merge.

#### parameters

* `[state]` (Object): An optional initial state for merging.
* `[options]` (Object): Contains options like `depth`.

#### returns

* (TransformStream): Takes in objects, spits out objects.

## Example

``` javascript
var streamArray = require("stream-array");
var stdout = require("stdout");
var mergeStream = require("object-merge-stream");

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
```
