var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');
var replace = require('gulp-replace');
var browserSync = require('browser-sync').create();
gulp.task('sass', function(){
	return gulp.src('scss/template_styles.scss')
			.pipe(sass())
			.pipe(autoprefixer())
			.pipe(replace('../', ''))
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({
				stream: true
			}))
});
//gulp.task('jade', function(){
//	return gulp.src('*.jade')
//			.pipe(jade({
//				pretty: true
//			}))
//			.pipe(gulp.dest('app'))
//			.pipe(browserSync.reload({
//				stream: true
//			}))
//});
gulp.task('watch', ['browserSync', 'sass'/*, 'jade'*/], function(){
	gulp.watch('**/*.scss', ['sass']);
	//gulp.watch('*.jade', ['jade']);
	//gulp.watch('**/*.scss', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app',
			index: "Shipstores_List_zakazov_customer_2016-03-28.html"
		},
	})
});