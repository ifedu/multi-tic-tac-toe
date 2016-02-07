module.exports = ($) => {
    'use strict'

    $.gulp.task('js', () => {
        const back = $.jsonData.configTask.back
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
            .pipe($.template({
                back,
                $: '$',

                server: {
                    nodejs: 'api/nodejs/index.js',
                    php: '/multi-tic-tac-toe-api/index.php'
                }
            }))
            .pipe($.gulp.dest($.deploy.js))
            .pipe(jsTranspiler[transpiler]())
            .pipe($.gulp.dest($.deploy.js))
    })
}