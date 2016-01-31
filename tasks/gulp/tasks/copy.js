module.exports = ($) => {
    'use strict'

    const copy = (src, dest) =>
        () =>
            $
            .gulp
            .src(src)
            .pipe($.gulp.dest(dest))

    $.gulp.task('copy-assets', copy(`${$.dev.assets}/**/*`, $.deploy.assets))
    $.gulp.task('copy-jsvendor', copy(`${$.dev.jsvendor}/**/*`, $.deploy.jsvendor))
    $.gulp.task('copy', (cb) => $.runSequence('copy-assets', 'copy-jsvendor', cb))
}