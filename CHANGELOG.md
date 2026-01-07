# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.1](https://github.com/es-shims/Number.parseInt/compare/v1.1.0...v1.1.1) - 2026-01-06

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`a045a7b`](https://github.com/es-shims/Number.parseInt/commit/a045a7b98e7e76cd61bac0528ec762f5a1b7e5c5)
- [patch] remove useless ESM entrypoint [`e77bbe3`](https://github.com/es-shims/Number.parseInt/commit/e77bbe33b3a9156249bd8434f5c3796a7bb1e7e8)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `auto-changelog`, `eslint`, `for-each`, `has-symbols`, `npmignore`, `tape` [`10b2b1f`](https://github.com/es-shims/Number.parseInt/commit/10b2b1fe6f56b30f32e2857e146906e432b8ed86)
- [actions] update rebase action to use reusable workflow [`a46432c`](https://github.com/es-shims/Number.parseInt/commit/a46432c127a37ba38061cbb9b395ebb9d853026a)
- [Deps] update `call-bind`, `define-properties`, `parseint` [`be5928d`](https://github.com/es-shims/Number.parseInt/commit/be5928dc093533ff17ca7ed736180de9e807766c)
- [Dev Deps] update `aud`, `tape` [`9760b1e`](https://github.com/es-shims/Number.parseInt/commit/9760b1ec3665ba6b4866e44c37f316ee2c83e596)
- [meta] add missing `engines.node` [`e2f4528`](https://github.com/es-shims/Number.parseInt/commit/e2f4528df1f44a26770d54bae545510336a48a42)
- [Dev Deps] use `npm audit` instead of `aud` [`e6dc3db`](https://github.com/es-shims/Number.parseInt/commit/e6dc3db50ecf8a7e9462e1d14fcfdb671d28107a)
- [readme] replace runkit CI badge with shields.io check-runs badge [`3a64086`](https://github.com/es-shims/Number.parseInt/commit/3a64086b7f579b12038b0a1c6d0a7b06b5c4f5be)

## [v1.1.0](https://github.com/es-shims/Number.parseInt/compare/v1.0.1...v1.1.0) - 2022-05-02

### Commits

- [Tests] flesh out tests [`d1d8fc3`](https://github.com/es-shims/Number.parseInt/commit/d1d8fc34ded19ab4034fd4239c863ed3abf718ce)
- [New] use `parseint` shim; shim `parseInt` when shimming `Number.parseInt` [`ea5bcb9`](https://github.com/es-shims/Number.parseInt/commit/ea5bcb9e5141c8f7cc26ac6e60b1647a153880ca)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `auto-changelog`, `functions-have-names`, `tape` [`40057e9`](https://github.com/es-shims/Number.parseInt/commit/40057e9d15430b4914483c3484afc08426b5d7c7)
- [Deps] update `define-properties` [`9d8d552`](https://github.com/es-shims/Number.parseInt/commit/9d8d552041a29b035909a59204297b7e13b71b7e)

## [v1.0.1](https://github.com/es-shims/Number.parseInt/compare/v1.0.0...v1.0.1) - 2021-12-13

### Commits

- [actions] reuse common workflows [`e686e66`](https://github.com/es-shims/Number.parseInt/commit/e686e665abb05f055848cf97a7778f4672ab10db)
- [Refactor] remove unnecessary ESM files [`0b8ee78`](https://github.com/es-shims/Number.parseInt/commit/0b8ee78888977023cf21914e14a684b346e4632e)
- [actions] update codecov uploader [`088292e`](https://github.com/es-shims/Number.parseInt/commit/088292e641d9893a3a5182fc6490bb3845ab7454)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`, `tape` [`7914592`](https://github.com/es-shims/Number.parseInt/commit/7914592254140d5f1f23e7f57defb3f4f6d2be76)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `auto-changelog`, `tape` [`155c201`](https://github.com/es-shims/Number.parseInt/commit/155c2017b537a09fc2f417346ccc7a2a57a259a5)
- [Fix] callBind to `Number`, not `Math` [`b8561dc`](https://github.com/es-shims/Number.parseInt/commit/b8561dc2b5ec88711941b30d9939396393dc127f)
- [Tests] use `Number` instead of `Math` [`bdf7f47`](https://github.com/es-shims/Number.parseInt/commit/bdf7f47cfb3312f5b69e15abc5eb7438745bf6ae)
- [Tests] add `@es-shims/api` [`1c300a7`](https://github.com/es-shims/Number.parseInt/commit/1c300a769b2dba95c1dc8316b9316354c6db1b87)
- [actions] update workflows [`290b53e`](https://github.com/es-shims/Number.parseInt/commit/290b53e9ff419e83923fba9cb47d6d37a1ce31ea)
- [actions] update workflows [`7e8d561`](https://github.com/es-shims/Number.parseInt/commit/7e8d56130d435a1d7a4061ddb6b741dec933d1dd)

## v1.0.0 - 2021-05-17

### Commits

- Initial commit & implementation [`8e984d5`](https://github.com/es-shims/Number.parseInt/commit/8e984d578a7b482700cccdc03667bdda524e7603)
- Tests [`3e9c8e5`](https://github.com/es-shims/Number.parseInt/commit/3e9c8e571ca3b0934d05f052d9b5aa26d85a3eb5)
- [actions] use `node/install` instead of `node/run`; use `codecov` action [`ed01382`](https://github.com/es-shims/Number.parseInt/commit/ed013821c7e113af7c9d38a253af6af78e2f1ae3)
- [actions] update workflows [`035fc1e`](https://github.com/es-shims/Number.parseInt/commit/035fc1e1246f61b141650737eb48deef5a1daed4)
- [readme] add actions and codecov badges [`799ca22`](https://github.com/es-shims/Number.parseInt/commit/799ca22de74a4d81bf028e617330ea1be85e7681)
- [meta] use `prepublishOnly` script for npm 7+ [`8bcc5f4`](https://github.com/es-shims/Number.parseInt/commit/8bcc5f4703bce050eb414e7513a59746f72d5f78)
- [Tests] increase coverage [`606ef9e`](https://github.com/es-shims/Number.parseInt/commit/606ef9e20501a0c13b5e01883ca9eb90e0030c97)
