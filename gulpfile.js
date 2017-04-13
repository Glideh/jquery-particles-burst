var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('vendors', function() {
    return gulp
        .src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery.animate-enhanced/jquery.animate-enhanced.min.js',
            'bower_components/bootstrap/dist/css/bootstrap.min.css'
        ])
        .pipe(gulp.dest('vendors'))
    ;
});

gulp.task('minify', function () {
    return gulp
        .src('lib/*.js')
        .pipe(minify({
            noSource: true
        }))
        .pipe(gulp.dest('dist'))
    ;
});

gulp.task('default', ['minify', 'vendors']);
