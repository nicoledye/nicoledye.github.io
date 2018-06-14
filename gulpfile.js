const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const pump = require('pump');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('html', () => {
  return gulp
    .src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('css', () => {
  return gulp
    .src('./src/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function() {
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('js', function(cb) {
  pump(
    [
      gulp.src('./src/js/script.js'),
      sourcemaps.init(),
      babel({
        presets: ['env']
      }),
      uglify(),
      sourcemaps.write(),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('img', () => {
  return gulp
    .src('./src/img/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/*.ttf').pipe(gulp.dest('./dist/fonts'));
});

gulp.task('materialize', function() {
  return gulp
    .src('./js/bin/materialize.min.js')
    .pipe(gulp.dest('./dist/js/bin'));
});

gulp.task('default', ['html', 'css', 'js', 'img', 'fonts', 'materialize']);
