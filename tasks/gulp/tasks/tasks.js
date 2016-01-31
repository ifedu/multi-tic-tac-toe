module.exports = ($) => {
    'use strict'

    $.gulp.task('jade-styl-jquery-php', (cb) => {
        $.jsonData.jQuery = true

        $.runSequence('clean', ['jade', 'styl', 'js-jQuery', 'copy-php', 'copy-jQuery', 'copy-assets'], cb)
    })

    $.gulp.task('jade-styl-vanillajs-php', (cb) => $.runSequence('clean', ['jade', 'styl', 'js-vanillajs', 'copy-php', 'copy-assets'], cb))
}