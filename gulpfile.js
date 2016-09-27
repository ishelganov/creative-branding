var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith');
    autoprefixer = require('gulp-autoprefixer');


/**
 * Обработка ошибок сборки
 */
function wrapPipe(taskFn) {
    return function(done) {
        var onSuccess = function() {
            done();
        };
        var onError = function(err) {
            done(err);
        }
        var outStream = taskFn(onSuccess, onError);
        if(outStream && typeof outStream.on === 'function') {
            outStream.on('end', onSuccess);
        }
    }
}


gulp.task('default', function() {

});

/**
 * Собирает sass
 */
gulp.task('sass', wrapPipe(function(success, error) {
 return gulp.src('./app/scss/style.scss')
     .pipe(sass({
         includePaths: [
             './bower_components/foundation/scss'
    ]
     }).on('error', error))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/css'))
}));


gulp.task('sprite', function () {
    var spriteData = gulp.src('app/img/icons/*')
        .pipe(spritesmith({
            imgName: '../img/sprite.png',
            cssFormat: 'scss',
            cssName: '_sprite.scss',
            algorithm: 'binary-tree',
            padding:10
        }));
    spriteData.img.pipe(gulp.dest('app/img/'));
    spriteData.css.pipe(gulp.dest('app//scss/utils/'));
});



gulp.task('watch', function(){
    gulp.watch('app/img/icons/**/*', ['sprite','sass']);
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    // gulp.watch('./image/icons/*.png', ['compass']);
});