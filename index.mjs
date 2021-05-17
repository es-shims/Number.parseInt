import callBind from 'call-bind';

import getPolyfill from 'number.parseint/polyfill';

export default callBind(getPolyfill(), Number);

export { default as getPolyfill } from 'number.parseint/polyfill';
export { default as implementation } from 'number.parseint/implementation';
export { default as shim } from 'number.parseint/shim';
