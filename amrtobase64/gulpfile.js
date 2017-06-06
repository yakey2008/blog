const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;

//启动服务，编辑scss
gulp.task('serve', () => {
    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html").on('change', reload);
    gulp.watch("js/*.js").on('change', reload);
});

// 默认启动服务编译代码
gulp.task('default', ['serve']);