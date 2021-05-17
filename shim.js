'use strict';

var define = require('define-properties');

module.exports = function shimMathParseInt() {
	define(Number, { parseInt: parseInt });
	return parseInt;
};
