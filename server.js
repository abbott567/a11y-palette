// Node / NPM dependencies
const express = require('express')

// Local dependancies
const nunjucks = require('./src/lib/nunjucks')
const locals = require('./src/lib/locals')

// Application
const app = express()

// Configure nunjucks
nunjucks.setup(app)

// Routes
app.get('/', async (req, res) => {
  res.locals.colours = await locals.colours()
  res.render('a11y-palette.njk')
})

// Serve
app.listen(3000)
console.log('listening on port 3000')
