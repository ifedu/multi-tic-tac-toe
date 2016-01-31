module.exports = ($) => {
    'use strict'

    $.gulp.watch(`${$.dev.jade}/**/*.jade`, ['jade'])

    $.gulp.watch([
        `${$.dev.js}/**/*.js`,
        `!${$.dev.js}/**/_*.js`,
        `!${$.dev.js}/**/_**/**/*.js`
    ], ['js'])

    $.gulp.watch(`${$.dev.styl}/**/*.styl`, ['styl'])
}