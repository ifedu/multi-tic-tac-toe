module.exports = ($) => {
    'use strict'

    $.gulp.task('css', () => {
        const css = $.jsonData.configTask.css

        return $
            .gulp
            .src([
                `${$.dev[css]}/**/*`,
                `!${$.dev[css]}/**/_*`,
                `!${$.dev[css]}/**/_**/**/*`
            ])
            .pipe($[css]({
                linenos: true
            }))
            .on('error', (error) => console.log(error))
            .pipe($.gulp.dest($.deploy.css))
    })
}