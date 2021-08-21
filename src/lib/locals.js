const { buildColoursFromSass, buildRGBValues } = require('./build-colours')

async function colours (req, res) {
  const colours1 = await buildColoursFromSass()
  const colours = await buildRGBValues(colours1)
  return colours
}

module.exports = { colours }
