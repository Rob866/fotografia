var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var deploy      = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();


gulp.task('serve',['sass',"comprimir"],function(){
   browserSync.init({
       server : "./app"
   });

   gulp.watch('app/js/*.js',["comprimir"]);
   gulp.watch('scss/bloques/*.scss',['sass']);
  

   gulp.watch('app/*.html').on('change',browserSync.reload);
   gulp.watch('app/js/dist/*.js').on('change',browserSync.reload);
});


gulp.task('sass',function(){
    return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());

});

gulp.task("comprimir",function(cb){
    pump([
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('app/js/dist')],cb);
});

gulp.task('deploy', function () {
    return gulp.src("./app/**/*")
      .pipe(deploy())
  });





