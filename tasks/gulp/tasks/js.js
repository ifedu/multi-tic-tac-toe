module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () => {
        const js = $.jsonData.configTask.js
        const transpiler = $.jsonData.configTask.transpiler

        const jsTranspiler = {
            babeljs: () => $.babel({
                presets: ['es2015']
            }),

            coffeescript: () => $.coffeescript(),

            typescript: () => $.typescript()
        }

        return $
            .gulp
            .src([
                `${$.dev[transpiler][js]}/**/*`,
                `!${$.dev[transpiler][js]}/**/_*`,
                `!${$.dev[transpiler][js]}/**/_**/**/*`
            ])
            .pipe($.changed($.deploy.js))
            .pipe(jsTranspiler[transpiler]())
            .on('error', (error) => console.log(error))
            .pipe($.gulp.dest($.deploy.js))
    })
}