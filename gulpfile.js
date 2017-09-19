const gulp = require('gulp');
var browsersync = require('browser-sync');
const reload = browsersync.reload;

gulp.task('serve', () => {
    browsersync.init({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app']
        }
    })

    gulp.watch([
        'app/*.html',
        'app/js/**/*',
        'app/images/**/*',
        'app/fonts/**/*',
        'app/css/**/*'
    ]).on('change', reload)
});
