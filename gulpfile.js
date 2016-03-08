var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


/*MINIFY SCRIPT
----------------------------------------------------------------------*/
gulp.task('minifyApp', function () {
	gulp.src('./dist/vanilla-color-picker.js')
		.pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
		.pipe(rename('vanilla-color-picker.min.js'))
		.pipe(gulp.dest('./dist/'));
	console.log('----> App minifyed')
});