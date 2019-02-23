const domino = require('domino')
const nanohtml = require('nanohtml/lib/browser')

const dom = domino.createDOMImplementation()
global.document = dom.createHTMLDocument()

module.exports = nanohtml
module.exports.default = module.exports
