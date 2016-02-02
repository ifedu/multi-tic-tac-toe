module.exports = ($) => {
    'use strict'

    $.gulp.task('run', (cb) => {
        $.jsonData = {
            configTask: {
                back: $.yargs.back || 'nodejs',
                css: $.yargs.css || 'stylus',
                html: $.yargs.html || 'jade',
                js: $.yargs.js || 'jquery',
                transpiler: $.yargs.transpiler || 'babeljs'
            }
        }

        return $.runSequence('clean', ['html', 'css', 'js', 'copy'], 'watch', cb)
    })
}