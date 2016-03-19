var gulp = require('gulp');
var shell = require('gulp-shell');

// Regular scripts tasks. Take the scripts, do some browserify magic.
gulp.task('scripts', shell.task([
  'npm run browserify-all',
]));

// Watchify script task. Like the script task, but cache the browserified bundle using watchify for faster build times.
gulp.task('scripts-watchify', shell.task([
  'npm run watchify-all',
]));
