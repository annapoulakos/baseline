var gulp = require('gulp'),
    fs = require('fs'),
    babelify = require("babelify"),
    browserify = require('browserify'),
    partialify = require('partialify'),
    karma = require('karma').server,
    sourcePath = 'source/**/*.js',
    distPath = 'build/';

gulp.task('browserify', function () {
    return browserify()
    .transform(babelify)
    .transform(partialify)
    .require('./source/index.js', {
        entry: true
    })
    .bundle()
    .on('error', function (err) {
        console.error(err.toString());
        this.emit('end');
    })
    .pipe(fs.createWriteStream(distPath + '/index.js'));
});

gulp.task('karma', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('watch', function () {
    gulp.watch('source/**/*.*', ['browserify']);
});

gulp.task('default', ['watch']);
