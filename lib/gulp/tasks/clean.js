var gulp   = require('gulp');
var del    = require('del');
var config = require('../config');

gulp.task('clean-public', function(cb) {
  del([config.publicAssets], cb);
});

gulp.task('clean-images', function(cb) {
  del([config.images.dest], cb);
});

gulp.task('clean-styles', function(cb) {
  del([config.styles.dest], cb);
});

gulp.task('clean-scripts', function(cb) {
  del([config.scripts.clean], cb);
});

gulp.task('clean-all', [
  'clean-public',
  'clean-images',
  'clean-styles',
  'clean-scripts'
]);
