var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("public/css/*.css").on("change", reload);
    gulp.watch("public/js/*.js").on("change", reload);
});