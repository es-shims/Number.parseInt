/* eslint-disable max-lines-per-function */

'use strict';

module.exports = function (parseInt, t) {
	t.test('should work', function (st) {
		st.equal(parseInt('601'), 601);
		st.end();
	});
};
