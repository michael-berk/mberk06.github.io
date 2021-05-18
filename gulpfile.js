var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var jade        = require('gulp-jade'); //I ADDED THIS

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

//I ADDED BELOW FUNC TO WORK WITH JADE
//Purpose: convert jade to html and save file in _includes
gulp.task('jade', gulp.series(function() {
	return gulp.src('_jadefiles/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('_includes'));
}));

/**
/**
 * Build the Jekyll Site and tell browser sync to start
 */
gulp.task('jekyll-build', gulp.series(function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
}));

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series(['jekyll-build'], function () {
    browserSync.reload();
}));


/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', gulp.series(function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css')) //may need to be changed
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
}));

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', gulp.series(function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch(['*.html', '_layouts/*', '_includes/*','pages/*','scripts/*','wordcloud/*'], ['jekyll-rebuild']); //Check what saves cause browser sync to run
	gulp.watch('_jadefiles/*.jade', ['jade']); //I ADDED: automatically convert jade files to html

}));

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', gulp.series(['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
}));
 

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series(['jade','browser-sync', 'watch']));
