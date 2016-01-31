module.exports = ($) => {
    'use strict'

    const copy = (src, dest) =>
        () =>
            $
            .gulp
            .src(src)
            .pipe($.gulp.dest(dest))

    $.gulp.task('copy-assets', copy(`${$.dev.assets}/**/*`, $.deploy.assets))
    $.gulp.task('copy-jQuery', copy($.dev.vendorJquery, $.deploy.jsVendor))

    $.gulp.task('copy-php', copy(`${$.dev.php}/**/*`, $.deploy.php))
}