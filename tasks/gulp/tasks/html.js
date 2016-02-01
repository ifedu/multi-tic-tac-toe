module.exports = ($) => {
    'use strict'

    $.gulp.task('html', () => {
        const html = $.jsonData.configTask.html

        return $
            .gulp
            .src([
                `${$.dev[html]}/**/*.${html}`,
                `!${$.dev[html]}/**/_*.${html}`,
                `!${$.dev[html]}/**/_**/**/*.${html}`
            ])
            .pipe($.changed($.deploy.html, {extension: '.html'}))
            .pipe($.data((file) => $.extendJsonData(file)))
            .pipe($[html]({
                pretty: true
            }))
            .on('error', (error) => console.log(error))
            .pipe($.gulp.dest($.deploy.html))
    })
}