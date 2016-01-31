module.exports = ($) => {
    'use strict'

    $.gulp.watch(`${$.dev.jade}/**/*.jade`, ['jade'])

    const js = (folder) => [
        `${folder}/**/*.js`,
        `!${folder}/**/_*.js`,
        `!${folder}/**/_**/**/*.js`
    ]
    $.gulp.watch(js($.dev.jsJquery), ['js-jQuery'])
    $.gulp.watch(js($.dev.jsVanillajs), ['js-vanillajs'])

    $.gulp.watch(`${$.dev.styl}/**/*.styl`, ['styl'])
}