module.exports = ($) => {
    'use strict'

    $.gulp.task('watch', (cb) => {
        const css = $.jsonData.configTask.css
        const html = $.jsonData.configTask.html
        const js = $.jsonData.configTask.js
        const transpiler = $.jsonData.configTask.transpiler

        $.gulp.watch([
            `${$.dev[css]}/**/*`,
            `!${$.dev[css]}/**/_*`,
            `!${$.dev[css]}/**/_**/**/*`
        ], ['css'])

        $.gulp.watch([
            `${$.dev[html]}/**/*.${html}`,
            `!${$.dev[html]}/**/_*.${html}`,
            `!${$.dev[html]}/**/_**/**/*.${html}`
        ], ['html'])

        $.gulp.watch([
            `${$.dev[transpiler][js]}/**/*`,
            `!${$.dev[transpiler][js]}/**/_*`,
            `!${$.dev[transpiler][js]}/**/_**/**/*`
        ], ['js'])
    })
}