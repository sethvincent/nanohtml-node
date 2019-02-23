# nanohtml-node

Get a full DOM object back from [nanohtml](https://npmjs.com/nanohtml) on the server side.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/nanohtml-node.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/nanohtml-node
[travis-image]: https://img.shields.io/travis/sethvincent/nanohtml-node.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/nanohtml-node
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CODE_OF_CONDUCT.md

## About

Currently the nanohtml package returns a string when used in Node.js. The reason is to provide a performant server-rendering experience. What it doesn't allow is easy testing.

This package behaves a little like nanohtml did back when it was called bel. It uses [domino](https://npmjs.com/domino), a Node.js implementation of the DOM, so that when using nanohtml it returns a DOM element.

This lets us test our nanohtml elements much more thoroughly than comparing strings. Returning a DOM element allows us to test attributes and event handlers without a bunch of hassle.

## Install

```sh
npm install --save nanohtml-node
```

## Usage

Here's a very simple example testing interaction with a button click handler:

```js
const test = require('tape')
const html = require('../index')

test('test that element', function (t) {
  t.plan(4)

  function onclick (e) {
    t.ok(typeof e === 'object')
    t.ok(e.target.childNodes.length === 1)
    const child = e.target.childNodes[0]
    t.ok(child.nodeValue === 'ok')
  }

  const result = html`<button onclick=${onclick}>ok</button>`
  t.ok(result.outerHTML === '<button>ok</button>')
  result.click()
})
```

## You might not need this

This package is a simple wrapper around domino and nanohtml. You may find that you have slightly different needs than this package allows. The good news is that the code is very small and easy to copy/paste:

```js
const domino = require('domino')
const nanohtml = require('nanohtml/lib/browser')

const dom = domino.createDOMImplementation()
global.document = dom.createHTMLDocument()

module.exports = nanohtml
module.exports.default = module.exports
```

You can use domino to create a document as part of the setup of your tests instead of relying on this package. Up to you!

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It's important that this project contributes to a friendly, safe, and welcoming environment for all, particularly for folks that are historically underrepresented in technology. Read this project's [code of conduct](CONDUCT.md)

## Change log

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Contact

- **chat** – You can chat about this project in the #choo irc channel on freenode
- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/nanohtml-node/issues)

## License

[ISC](LICENSE.md)
