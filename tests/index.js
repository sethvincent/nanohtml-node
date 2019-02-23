const test = require('tape')
const html = require('../index')

test('do it', function (t) {
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
