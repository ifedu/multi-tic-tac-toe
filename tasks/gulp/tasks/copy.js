module.exports = ($) => {
    'use strict'

    const copy = (src, dest) =>
        () =>
            $
            .gulp
            .src(src)
            .pipe($.gulp.dest(dest))

    $.gulp.task('copy', (cb) => {
        const back = $.jsonData.configTask.back
        const js = $.jsonData.configTask.js

        $.gulp.task('copy-assets', copy(`${$.dev.assets}/**/*`, $.deploy.assets))
        $.gulp.task('copy-back', copy(`${$.dev.back}/**/*.${back}`, $.deploy.api))
        $.gulp.task('copy-vendorjs', copy($.dev.vendor[js], $.deploy.jsVendor))

        return $.runSequence(['copy-assets', 'copy-back', 'copy-vendorjs'], cb)
    })
}