module.exports = ($) => {
    'use strict'

    $.gulp.task('styl', () =>
        $
        .gulp
        .src([
            `${$.dev.styl}/**/*.styl`,
            `!${$.dev.styl}/**/_*.styl`,
            `!${$.dev.styl}/**/_**/**/*.styl`
        ])
        .pipe($.stylus({
            linenos: true
        }))
        .on('error', (error) => console.log(error))
        .pipe($.gulp.dest($.deploy.css))
    )
}