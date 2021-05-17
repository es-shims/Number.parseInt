# Number.parseInt <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Number.parseInt` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-number.parseint).

## Getting started

```sh
npm install --save number.parseint
```

## Usage/Examples

```js
console.log(Number.parseInt("-3")); // -3
console.log(Number.parseInt("0x10")); // 16
console.log(Number.parseInt("30", 7)); // 21
console.log(Number.parseInt("ef")); // NaN
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/number.parseint
[npm-version-svg]: https://versionbadg.es/es-shims/Number.parseInt.svg
[deps-svg]: https://david-dm.org/es-shims/Number.parseInt.svg
[deps-url]: https://david-dm.org/es-shims/Number.parseInt
[dev-deps-svg]: https://david-dm.org/es-shims/Number.parseInt/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Number.parseInt#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/number.parseint.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/number.parseint.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/number.parseint.svg
[downloads-url]: https://npm-stat.com/charts.html?package=number.parseint
