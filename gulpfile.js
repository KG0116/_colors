var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function(){
	return browserify({entries: './public/javascripts/jsx/app.jsx', extensions: ['.jsx'], debug: true})
		.transform('babelify', {presets: ['es2015', 'stage-0', 'react']}, {plugins: ['transform-class-properties']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./public/javascripts'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);