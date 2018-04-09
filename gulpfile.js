var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function(){
  return gulp.src('source/sass/style.scss')
         .pipe(plumber())
         .pipe(sass({
            style : 'compressed'
          }))
         .pipe(gulp.dest('source/css'))
         .pipe(bs.stream())
});


gulp.task('serve', ['sass'], function(){
  bs.init({
    server: 'source/'
  });

  gulp.watch('source/sass/**/*.scss', ['sass']);
  gulp.watch('source/*.html').on('change', bs.reload);
});