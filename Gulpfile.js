var babelify = require('babelify'),
    browserify = require('browserify'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    css = require('browserify-css'),
    _ = require('lodash'),
    path = require('path');

gulp.task('default', [ 'build','connect','watch' ]);
gulp.task('realtime', ['default','watch:static','watch:js'])

gulp.task('connect',function() {
    connect.server({
        root: 'build',
        livereload: true
    });
})

gulp.task('build',['js:bundle','r:copy'])
gulp.task('watch',['watch:static','watch:js'])

gulp.task('r:copy',function() {
    return gulp.src(['./app/**/*',
        '!./app/**/*.js',
        '!./app/**/*.css',
        ],{ nodir:true})
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload())

})

gulp.task('globalJS:copy',function() {
    return gulp.src(['./app/**/*',
        '!./app/**/*.js'
        ])
    .pipe(gulp.dest('./build/'))
})
 
gulp.task('js:bundle', function () {
  var bundler = browserify({
    entry: './app/index.js',
    debug: true,  
    cache: {},
    packageCache: {}
  })
 
  return bundler
    .add('./app/js/index.js')
    .transform(css, { 
        rootDir:".",
        processRelativeUrl: function(relativeUrl) {
            if (path.extname(relativeUrl) === ".png") {
                // Embed image data with data URI 
                var DataUri = require('datauri');
                var dUri = new DataUri(relativeUrl);
                return dUri.content;
            }
            return relativeUrl;
        }})
    .transform(babelify)
    .bundle()
    .on('error', function(err) {
        console.log(err.toString())
        this.emit('end')
    })
    .pipe(source('./app/js/index.js'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(connect.reload());
});


gulp.task('watch:js',function() {
    return watch(['./app/**/*.js','./app/**/**/*.js','./app/**/*.css'],function() {
        gulp.run('js:bundle')
        connect.reload()
    })
})

gulp.task('watch:static',function() {
    return watch(['app/**/*.html'],function() {
        gulp.run('r:copy')
        connect.reload()
    })
})