module.exports = ($) => {
    'use strict'

    $.gulp.task('jade-styl', (cb) => $.runSequence('clean', ['copy', 'jade', 'js', 'styl'], cb))
}