const gulp = require('gulp');

gulp.task('default', () => {
  console.linfo('@@test');
  gulp.src(['src/**/*']).pipe(gulp.dest('build'));

});