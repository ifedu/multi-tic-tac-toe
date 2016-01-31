module.exports = ($) => {
    'use strict'

    $.gulp.task('jade', () =>
        $
        .gulp
        .src([
            `${$.dev.jade}/**/*.jade`,
            `!${$.dev.jade}/**/_*.jade`,
            `!${$.dev.jade}/**/_**/**/*.jade`
        ])
        .pipe($.changed($.deploy.jade, {extension: '.html'}))
        .pipe($.data((file) => $.extendJsonData(file)))
        .pipe($.jade({
            pretty: true
        }))
        .on('error', (error) => console.log(error))
        .pipe($.gulp.dest($.deploy.jade))
    )
}