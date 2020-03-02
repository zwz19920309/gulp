const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
gulp.task('clean', function () {
  del.sync('build');
});

// less
// gulp.task('less', () => {
//   gulp.src('src/**/*.less').pipe(less()).pipe(gulp.dest('build'));
// });

gulp.task('less', () => {
  gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 versions', 'Firefox > 20'],
      cascade: false
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['clean', 'less'], () => {
  console.info('default');
});

gulp.task('watch', () => {
  const watcher = gulp.watch('src/**/*', ['default']);
  watcher.on('change', event => {
    console.log('File ' + event.path + ' was ' + event.type);
  });
});