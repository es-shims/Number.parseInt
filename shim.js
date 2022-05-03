'use strict';

var define = require('define-properties');

var shimParseInt = require('parseint/shim');

module.exports = function shimNumberParseInt() {
	shimParseInt();

	define(
		Number,
		{ parseInt: parseInt },
		// They are different in some Webkit versions (https://bugs.webkit.org/show_bug.cgi?id=143799)
		{ parseInt: function () { return parseInt !== Number.parseInt; } }
	);

	return parseInt;
};
