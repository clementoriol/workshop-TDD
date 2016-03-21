var gulp   = require('gulp');
var del    = require('del');
var config = require('../config');

gulp.task('clean-public', function() {
  return del([config.publicAssets]);
});

gulp.task('clean-images', function() {
  return del([config.images.dest]);
});

gulp.task('clean-styles', function() {
  return del([config.styles.dest]);
});

gulp.task('clean-scripts', function() {
  return del([config.scripts.clean]);
});

gulp.task('clean-all', [
  'clean-public',
  'clean-images',
  'clean-styles',
  'clean-scripts'
]);
