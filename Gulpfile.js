// Dependencies
// ---------------------
var gulp       = require('gulp-help')(require('gulp'));
var scsslint   = require('gulp-scss-lint');
var rename     = require('gulp-rename');
var cache      = require('gulp-cached');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var notify     = require("gulp-notify");

// variables
// ---------------------
var scssFile = './sass/style.scss';
var cssFile  = './dist';

// Command: sass:production
//
// Minify the css for production use.
// It will also generate source maps for debugging.
gulp.task('sass:production', 'Minify the css.', function () {
  return gulp.src(scssFile)
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true, outputStyle: 'compressed'})
      .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssFile));
});

// Command: sass:development
//
// Generates the css files for development use.
// it will also generate source maps for debugging.
gulp.task('sass:development', 'Generates the css file for development.', function () {
  return gulp.src(scssFile)
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true, outputStyle: 'expanded'})
      .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(cssFile));
});

// Command: sass:lint
//
// Lint the scss files against the code standards.
gulp.task('sass:lint', 'Lint the scss files against the code standards', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(cache('scsslint')) // Cache will only check the modified files.
        .pipe(scsslint({'config': '.scss-lint.yml'}));
});

// Command: sass:watch
//
// Watch the scss files during development.
// It will automatically re-generate the css file when u hit the save shorcut.
gulp.task('sass:watch', 'Watch the scss files during development', function () {
  return gulp.watch('./sass/**/*.scss', ['sass:development'])
    .on('change', function(event) {
      notify('File ' + event.path + ' was ' + event.type).write('')
  });
});