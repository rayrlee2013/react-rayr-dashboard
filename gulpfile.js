const gulp = require('gulp');
const clean = require('gulp-clean');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const runSequence = require('run-sequence');

gulp.task('build:clean', () => {
    return gulp.src('./build')
        .pipe(clean());
});

gulp.task('build:webpack', function () {
    return gulp.src('./src/app.js')
        .pipe(webpackStream(require('./conf/webpack.build'), webpack))
        .pipe(gulp.dest('./build'));
});

gulp.task('build', function (done) {
    runSequence(
        ['build:clean'],
        ['build:webpack'],
        done
    );
});
