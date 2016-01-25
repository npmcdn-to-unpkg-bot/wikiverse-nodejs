var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');

// var gutil = require('gulp-util');
// var gulpif = require('gulp-if');
// var streamify = require('gulp-streamify');
// var autoprefixer = require('gulp-autoprefixer');
// var cssmin = require('gulp-cssmin');
// var less = require('gulp-less');
// var plumber = require('gulp-plumber');
// var source = require('vinyl-source-stream');

//3rd party scripts minification
gulp.task('vendor', function() {
  return gulp.src('public/javascripts/vendor/*.js')
    .pipe(concat('_vendor.min.js'))
    //.pipe(gulp.dest('public/javascripts'))
    //.pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */

 // Without watchify
 gulp.task('browserify', function () {
   return browserify('public/javascripts/es6/wikiverse.js', { debug: true })
   	.transform(babelify, { presets: ['es2015'] })
   	.bundle()
   	.pipe(source('_wv.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
 })

/*
 |--------------------------------------------------------------------------
 | Same as browserify task, but will also watch for changes and re-compile.
 |--------------------------------------------------------------------------
 */
// gulp.task('browserify-watch', ['browserify-vendor'], function() {
//   var bundler = watchify(browserify('app/main.js', watchify.args));
//   bundler.external(dependencies);
//   bundler.transform(babelify, { presets: ['es2015', 'react'] })
//   bundler.on('update', rebundle);
//   return rebundle();

//   function rebundle() {
//     var start = Date.now();
//     return bundler.bundle()
//       .on('error', function(err) {
//         gutil.log(gutil.colors.red(err.toString()));
//       })
//       .on('end', function() {
//         gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
//       })
//       .pipe(source('bundle.js'))
//       .pipe(gulp.dest('public/js/'));
//   }
// });


gulp.task('css', function () {
  return gulp.src('public/stylesheets/vendor/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('public/stylesheets'));
});


gulp.task('default', function() {
  // place code for your default task here
});