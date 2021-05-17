'use strict';

require('../shim')();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Number.parseInt.length, 2, 'Number.parseInt has a length of 2');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Number.parseInt.name, 'parseInt', 'Number.parseInt has name "parseInt"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'parseInt'), 'Number.parseInt is not enumerable');
		et.end();
	});

	t.test('is the same object as the global parseInt', function (st) {
		// fixed in WebKit nightly in https://bugs.webkit.org/show_bug.cgi?id=143799#add_comment
		st.equal(Number.parseInt, parseInt);
		st.end();
	});

	runTests(Number.parseInt, t);

	t.end();
});
