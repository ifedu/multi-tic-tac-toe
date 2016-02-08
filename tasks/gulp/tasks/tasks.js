module.exports = ($) => {
    'use strict'

    $.gulp.task('run', (cb) => {
        $.jsonData.configTask = {
            back: $.yargs.back || 'php',
            css: $.yargs.css || 'stylus',
            html: $.yargs.html || 'jade',
            js: $.yargs.js || 'polymer',
            transpiler: $.yargs.transpiler || 'babeljs'
        }

        // FRONT
        $.dev[$.jsonData.configTask.transpiler] = {
            [$.jsonData.configTask.js]: `./../../frontend/js/${$.jsonData.configTask.transpiler}/${$.jsonData.configTask.js}`
        }

        return $.runSequence('clean', ['html', 'css', 'js', 'copy'], 'watch', cb)
    })
}