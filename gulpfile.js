var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	console.log("Hello From Gulp!")
});

gulp.task('uglify', function() {
  gulp.src('build/**/*.js')
    .pipe(uglify({indentSize: 2}))
    .pipe(gulp.dest('./min/'))
});
