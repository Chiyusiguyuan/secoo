const gulp = require('gulp');

gulp.task('hello',function(){
    console.log('hello');
})

gulp.task('copy-html',function(){
    return gulp.src('*.html')
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
gulp.task('copy-goods-css',function(){
    return gulp.src('goods.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename('goods.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})
gulp.task('copy-maingoods-css',function(){
    return gulp.src('maingoods.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename('maingoods.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})
gulp.task('copy-login-css',function(){
    return gulp.src('login.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename('login.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})
gulp.task('copy-shoppingcar-css',function(){
    return gulp.src('shoppingcar.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename('shoppingcar.min.css'))
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

gulp.task("build", ["copy-html", "copy-css", "copy-images", "copy-scripts", "copy-data",'copy-goods-css','copy-maingoods-css','copy-login-css','copy-shoppingcar-css'], function(){
	console.log("编译成功");
})


gulp.task("watch", function(){
	gulp.watch(['*.json','!package.json','!package-lock.json'], ['copy-data']);
	gulp.watch(["*.js", "!gulpfile.js"], ['copy-scripts']);
	gulp.watch(['index.css'], ['copy-css']);
	gulp.watch(['images/*.{jpg,png}'], ['copy-images']);
	gulp.watch(["*.html"], ['copy-html']);
    gulp.watch(['goods.css'], ['copy-goods-css']);
    gulp.watch(['maingoods.css'],['copy-maingoods-css']);
    gulp.watch(['login.css'],['copy-login-css']);
    gulp.watch(['shoppingcar.css'],['copy-shoppingcar-css']);
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
