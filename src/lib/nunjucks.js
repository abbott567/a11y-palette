const hexRgb = require('./hex-rgb')
const nunjucks = require('nunjucks')
const path = require('path')
function setup (app) {
  app.set('view engine', 'njk')

  const paths = [
    path.join(__dirname, '../', '../', 'src'),
    path.join(__dirname, '../', '../', 'src', 'views', 'layouts')
  ]

  const nunjucksEnvironment = nunjucks.configure(paths, {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
  })

  nunjucksEnvironment.addFilter('hexrgb', hexRgb)

  return app
}

module.exports = { setup }
