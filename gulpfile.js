var gulp = require('beverage')(require('gulp'))

gulp.task('dev', 'DEVELOP', [
  'build',
  'sourcegate:watch',
  'build:watch'
])
