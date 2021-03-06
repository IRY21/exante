var gulp                        = require('gulp');
    cnf                         = require('../package.json').config;

gulp.task('fonts', function () {
    return gulp.src(cnf.src.fonts)
        .pipe(gulp.dest(cnf.dist.fonts));
});

gulp.task('fonts:watch', function () {
    gulp.watch(cnf.src.fonts, ['fonts', 'bs-reload']);
});