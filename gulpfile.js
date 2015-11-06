var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('./content/themes/casper/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./content/themes/casper/assets/css'));
});

gulp.task('default', function() {
  gulp.watch('./content/themes/casper/assets/**/*.scss', ['styles']);
});
