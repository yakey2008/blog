const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);