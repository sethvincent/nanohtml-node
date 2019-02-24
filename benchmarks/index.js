const bench = require('nanobench')

bench('nanohtml string', function (b) {
  const html = require('nanohtml')

  b.start()

  for (var i = 0; i < 200000; i++) {
    data = html`<div>example</div>`
  }

  b.end()
})

bench('nanohtml-node', function (b) {
  const htmlnode = require('../index')

  b.start()

  for (var i = 0; i < 200000; i++) {
    data = htmlnode`<div>example</div>`.outerHTML
  }

  b.end()
})
