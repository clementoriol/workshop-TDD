var gulp                    = require('gulp');
var sass                    = require('gulp-sass');
var config                  = require('../config').styles;
var autoprefixer            = require('gulp-autoprefixer');
var cssnano                 = require('gulp-cssnano');
var plumber                 = require('gulp-plumber');
var notify                  = require('gulp-notify');
var sourcemaps              = require('gulp-sourcemaps');


// Handle Default Syles
gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: notify.onError('SASS Error: <%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .pipe(cssnano({ safe: true, autoprefixer: false, discardComments: {removeAll: true}}))
    .pipe(autoprefixer({browsers: ['last 2 versions', '> 1%']}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
});
