const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const del = require('del');
const reload = browserSync.reload;

//del dist directory
gulp.task('del', function (cb) {
    return del(['dist'], cb);
})
//run serve compile code ,watch code change
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: "./"
    });
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("js/*.js").on('change', reload);
});
//dist code
gulp.task('html',()=>{
    return gulp.src('./index.production.html')
    .pipe(rename('./index.html'))
})
gulp.task('style', () => {
    return gulp.src(['./lib/css/*.css','./css/*.css'])
        .pipe(concat('main.css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('js',()=>{
    return gulp.src(['./lib/js/jquery.min.js','./lib/js/*.js','./js/*.js'])
    .pipe(concat('main.js'))
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
})

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', () => {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('build',['style','js']);
gulp.task('default', ['serve']);