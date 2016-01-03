'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

gulp.task('inject', function() {
	var injectFiles = gulp.src('src/app/**/*.js').pipe(angularFilesort());
	var injectOptions = {
	}
	var wiredepOptions = {
		directory: 'public/components'
	};

	return gulp.src('src/*.html')
		.pipe(inject(injectFiles, injectOptions))
		.pipe(wiredep(wiredepOptions))
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream());
});

gulp.task('live', function() {

	browserSync.use(browserSyncSpa({
		selector: '[ng-app]'
	}));

	gulp.watch('src/app/**/*.js', function(event) {
		gulp.start('inject');

	});
	gulp.watch('src/app/**/*.html', function(event) {
		browserSync.reload(event.path);
	});

	gulp.watch(['src/*.html', 'bower.json'], ['inject']);

	browserSync.init({
		server: {
			baseDir: ['build'],
			routes: {
				'/public/components': 'public/components',
				'/src': 'src'
			}
		},
		browser: 'src',
		startPath: '/'
	});
});
