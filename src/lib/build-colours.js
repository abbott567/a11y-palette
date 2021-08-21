const fs = require('fs').promises
const hexrgb = require('./hex-rgb')
const getContrastRatio = require('get-contrast-ratio').default

async function buildRGBValues (colours) {
  colours.forEach(colour => {
    colour.shades.forEach(shade => {
      shade.contrast = getContrastRatio(shade.values[0].hex, shade.values[1].hex)
    })
  })
  return colours
}

async function buildColoursFromSass () {
  const colours = []
  const rawFileNames = await fs.readdir('src/assets/sass/themes')
  for await (const fileName of rawFileNames) {
    const colour = fileName.split('.scss')[0]
    const data = await fs.readFile(`src/assets/sass/themes/${fileName}`, 'utf8')
    const colourObj = {
      name: colour,
      shades: [
        { name: 'darkest', values: [] },
        { name: 'dark', values: [] },
        { name: 'mid', values: [] },
        { name: 'light', values: [] },
        { name: 'lightest', values: [] }
      ]
    }
    const sassVars = data.matchAll(/^\$(.*):\s#(.*);/gm)
    for (const sassVar of sassVars) {
      const parent = sassVar[1].split('-')[0]
      const name = sassVar[1].split('-').join('_')
      const prettyName = sassVar[1].split('-')[1]
      const hex = `#${sassVar[2]}`
      const rgb = hexrgb(hex)
      const values = { name, prettyName, hex, rgb }
      const shade = colourObj.shades.find(x => x.name === parent)
      shade.values.push(values)
    }
    colours.push(colourObj)
  }
  return colours
}

module.exports = { buildColoursFromSass, buildRGBValues }
