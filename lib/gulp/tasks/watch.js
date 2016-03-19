var gulp        = require('gulp');
var config      = require('../config');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var watch       = require('gulp-watch');
var runSequence = require('run-sequence');

gulp.task('watch', function () {
  // Watch Sass Files
  watch([config.styles.folder_src], function() {
    runSequence(
      'styles',
      'move-styles'
    );
  });

  // Watch JS Files
  watch(config.scripts.watch, function() {
    runSequence(
      'move-scripts'
    );
    reload();
  });

  // Watch Images Files
  watch(config.images.folder_src, function() {
    runSequence(
      'images',
      'move-images'
    );
    reload();
  });

  // Watch Templates Files
  watch(config.templates.folder_src, function() {
    reload();
  })
});
