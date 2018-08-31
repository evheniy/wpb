const gulp = require('gulp');
const babel = require('gulp-babel');
const cleanDest = require('gulp-clean-dest');

gulp.task('default', () => gulp.src(['./src/**/*.*'])
  .pipe(cleanDest('lib'))
  .pipe(babel())
  .pipe(gulp.dest('lib')));
