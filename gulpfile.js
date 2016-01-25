var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//var rename = require('gulp-rename');
// var gutil = require('gulp-util');
// var gulpif = require('gulp-if');
// var streamify = require('gulp-streamify');
// var autoprefixer = require('gulp-autoprefixer');
// var cssmin = require('gulp-cssmin');
// var less = require('gulp-less');
// var plumber = require('gulp-plumber');
// var source = require('vinyl-source-stream');
// var babelify = require('babelify');
// var browserify = require('browserify');
// var watchify = require('watchify');

//3rd party scripts minification
gulp.task('vendor', function() {
  return gulp.src('public/javascripts/vendor/*.js')
    .pipe(concat('_vendor.min.js'))
    //.pipe(gulp.dest('public/javascripts'))
    //.pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
});


gulp.task('default', function() {
  // place code for your default task here
});