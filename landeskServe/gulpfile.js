const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const del = require('del');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const reload = browserSync.reload;

let porhtml = './index.production.html';
let devhtml = './index.dev.html';

//更换html入口名字
gulp.task('prohtml', ['devhtml'], () => {
    return gulp.src(porhtml)
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./'))
})

gulp.task('devhtml', () => {
    return gulp.src(devhtml)
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./'))
})

gulp.task('sypro', function () {
    return gulp.src('./index.html')
        .pipe(rename(porhtml))
        .pipe(gulp.dest('./'))
})

//压缩css,js
gulp.task('style', ['js'],() => {
    return gulp.src(['./lib/css/*.css', './css/*.css'])
        .pipe(concat('main.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('./dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/css'))
})

gulp.task('js', ['del'],() => {
    return gulp.src(['./lib/js/jquery.min.js', './lib/js/*.js', './js/*.js'])
        .pipe(concat('main.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/js'))
})

gulp.task('img', ['style'], () => {
    return gulp.src('./images/*')
        .pipe(gulp.dest('./dist/images/'))
})
//静态资源加版本标记
gulp.task('version',['img'],()=>{
    return gulp.src(['./dist/rev/**/*.json','./index.html'])
    .pipe(revCollector({
        replaceReved:true
    }))
    .pipe(gulp.dest('./'))
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

//删除dist目录
gulp.task('del', function (cb) {
    return del(['dist'], cb);
})

//启动服务，编辑scss
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: "./",
        port:3400
    });
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("js/*.js").on('change', reload);
});
//更换html入口
gulp.task('promode', ['prohtml']);
gulp.task('devmode', ['devhtml']);
//构建生产环境代码
gulp.task('build', ['version']);
// 默认启动服务编译代码
gulp.task('default', ['serve']);