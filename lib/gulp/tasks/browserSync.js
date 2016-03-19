var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').browserSync;

gulp.task('browserSync', function () {
  browserSync(config);
});

gulp.task('browserSync-reload', function () {
  browserSync.reload();
});

