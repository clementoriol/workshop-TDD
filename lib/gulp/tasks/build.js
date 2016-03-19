var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  return buildDev(callback);
});

function buildDev(callback){
  runSequence(
    'clean-all',
    'images',
    'styles',
    'move-all',
    callback
  );
}
