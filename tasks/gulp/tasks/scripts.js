module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () =>
        $
        .gulp
        .src([
            `${$.dev.js}/**/*.js`,
            `!${$.dev.js}/**/_*.js`,
            `!${$.dev.js}/**/_**/**/*.js`
        ])
        .pipe($.changed($.deploy.js))
        .pipe($.babel({
            presets: ['es2015']
        }))
        .on('error', (error) => console.log(error))
        .pipe($.gulp.dest($.deploy.js))
    )
}