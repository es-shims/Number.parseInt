'use strict';

var parseInt = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(parseInt, t);

	t.end();
});
