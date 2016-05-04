var gulp = require('gulp');
var beautify = require('gulp-uglyfly');

gulp.task('default', function() {
	console.log("Hello From Gulp!")
});

gulp.task('uglyfly', function() {
  gulp.src('build/**/*.js')
    .pipe(beautify({indentSize: 2}))
    .pipe(gulp.dest('./min/'))
});
