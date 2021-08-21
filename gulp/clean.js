const gulp = require('gulp')
const clean = require('gulp-clean')
const fs = require('fs')

gulp.task('clean:public', () => {
  return gulp.src('src/public/**/*', { read: false, allowEmpty: true })
    .pipe(clean())
})

gulp.task('clean:build', () => {
  if (!fs.existsSync('build')) {
    fs.mkdirSync('build')
  }

  return gulp.src('build/**/*', { read: false, allowEmpty: true })
    .pipe(clean())
})
