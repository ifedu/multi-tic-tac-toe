module.exports = ($) => {
    'use strict'

    const script = (folder) =>
        $
        .gulp
        .src([
            `${folder}/**/*.js`,
            `!${folder}/**/_*.js`,
            `!${folder}/**/_**/**/*.js`
        ])
        .pipe($.changed($.deploy.js))
        .pipe($.babel({
            presets: ['es2015']
        }))
        .on('error', (error) => console.log(error))
        .pipe($.gulp.dest($.deploy.js))

    $.gulp.task('js-jQuery', () => script($.dev.jsJquery))

    $.gulp.task('js-vanillajs', () => script($.dev.jsVanillajs))
}