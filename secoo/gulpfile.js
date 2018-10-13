const gulp = require('gulp');

gulp.task('hello',function(){
    console.log('hello');
})

gulp.task('copy-html',function(){
    return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})

const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task('copy-css',function(){
    return gulp.src('index.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());

})

gulp.task('copy-images',function(){
    return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());

})

gulp.task('copy-scripts',function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());

})

gulp.task('copy-data',function(){
    return  gulp.src(['*.json','!package.json','!package-lock.json'])
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());

})

gulp.task('copy-iconfont',function(){
    return gulp.src('iconfont/*')
    .pipe(gulp.dest('dist/iconfont'))
})

gulp.task("build", ["copy-html", "copy-css", "copy-images", "copy-scripts", "copy-data"], function(){
	console.log("编译成功");
})


gulp.task("watch", function(){
	gulp.watch(['*.json','!package.json','!package-lock.json'], ['copy-data']);
	gulp.watch(["*.js", "!gulpfile.js"], ['copy-scripts']);
	gulp.watch(['index.css'], ['copy-css']);
	gulp.watch(['images/*.{jpg,png}'], ['copy-images']);
	gulp.watch(["index.html"], ['copy-html']);

})

const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: 'dist',
		port: 8888,
		livereload: true
	})
})

gulp.task('default',['watch','server']);
