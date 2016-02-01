module.exports = ($) => {
    'use strict'

    $.gulp.task('run', (cb) => {
        $.jsonData = {
            configTask: {
                back: $.yargs.back,
                css: $.yargs.css,
                html: $.yargs.html,
                js: $.yargs.js,
                transpiler: $.yargs.transpiler
            }
        }

        return $.runSequence('clean', ['html', 'css', 'js', 'copy'], 'watch', cb)
    })
}