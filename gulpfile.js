var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var babelify = require('babelify');
var uglify = require('gulp-uglify');
var del = require('del');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var ejs = require('gulp-ejs');

gulp.task('css', function() {
    gulp.src('app/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build/css/'))
        .pipe(livereload());
});

gulp.task('json', function() {
     gulp.src('src/js/data/data.json')
     .pipe(gulp.dest('./build/moviesz.json'))
});

gulp.task('ejs', function() {
    gulp.src("./src/views/pages/index.ejs")
    .pipe(ejs({}, {ext:'.html'}))
    .pipe(gulp.dest("./build"))
    .pipe(livereload());
});

gulp.task('html', function() {

});

gulp.task('serve', function() {

});

gulp.task('connect', function () {
	connect.server({
		root: 'build',
		port: 4000,
        livereload: true
	});
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the build/js/ directory
        .pipe(gulp.dest('./build/js/'))
        .pipe(livereload());
});

// The default task (called when we run `gulp` from cli)
//gulp.task('default', ['ejs', 'js', 'sass'], function() {
//});

gulp.task('watch', function() {
    livereload.listen()
    gulp.watch('app/sass/*.scss', ['css'])
    gulp.watch('src/views/**/*.ejs', ['ejs'])
    gulp.watch('app/**/*.js', ['browserify']);
})

gulp.task('default', ['connect', 'json', 'watch'])
