const gulp = require('gulp')
const got = require('got')
const minify = require('html-minifier').minify
const fs = require('fs')

gulp.task('scrape', async () => {
  return new Promise((resolve, reject) => {
    (async () => {
      const response = await got('http://localhost:3000')
      const html = minify(response.body, { collapseWhitespace: true })
      await fs.writeFile('build/accessible-colour-palette.html', html, function (err) {
        if (err) reject(err)
        console.log('--------------- HTML Written ---------------')
        resolve()
      })
    })()
  })
})
