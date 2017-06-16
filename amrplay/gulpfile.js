const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const babel = require('gulp-babel');


//编译es6
gulp.task('es6',()=>{
    gulp.src('./es6/*.js')
    .pipe(babel({
        presets:['es2015']
    }))
    .pipe(gulp.dest('js'));
})
//启动服务，编辑scss
gulp.task('serve',['es6'], () => {
    browserSync.init({
        server: "./",
        port:3200
    });
    gulp.watch("*.html").on('change', reload);
    gulp.watch("es6/*.js",['es6']);
    gulp.watch("js/*.js").on('change',reload)
});

// 默认启动服务编译代码
gulp.task('default', ['serve']);