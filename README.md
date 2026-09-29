<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# mute-stdout

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Mute and unmute stdout.

## Usage

```js
var stdout = require("mute-stdout");

stdout.mute();

console.log("will not print");

stdout.unmute();

console.log("will print");
```

## API

### mute()

Mutes the `process.stdout` stream by replacing the `write` method with a no-op function.

### unmute()

Unmutes the `process.stdout` stream by restoring the original `write` method.

## Strict No LLM / No AI Policy

No LLMs for issues.

No LLMs for patches / pull requests.

No LLMs for comments on the bug tracker, including translation.

English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

## License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: http://img.shields.io/npm/dm/mute-stdout.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/mute-stdout
[npm-image]: http://img.shields.io/npm/v/mute-stdout.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/gulp-mute-stdout/actions/workflows/dev.yml
[ci-image]: https://img.shields.io/github/actions/workflow/status/gulpjs/gulp-mute-stdout/dev.yml?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/gulp-mute-stdout
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/gulp-mute-stdout/main.svg?style=flat-square
<!-- prettier-ignore-end -->
