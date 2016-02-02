module.exports = ($) => {
    'use strict'

    $.gulp.task('clean', (cb) =>
        $.del([$.deploy.dir, $.deploy.server], {
            force: true
        }, cb)
    )
}