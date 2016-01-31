'use strict'

module.exports = {
    // LIBS EXTERNAL
    babel: require('gulp-babel'),
    changed: require('gulp-changed'),
    del: require('del'),
    gulp: require('gulp'),
    jade: require('gulp-jade'),
    runSequence: require('run-sequence'),
    stylus: require('gulp-stylus'),

    // LIBS INTERNAL
    fs: require('fs'),
    path: require('path'),

    // DIRECTORIES
    tasks: './tasks',

    dev: {
        assets: './../../design/assets',
        dir: './../..',
        jade: './../../frontend/html/jade',
        js: './../../frontend/js',
        jsvendor: './../../frontend/js/_vendor',
        styl: './../../frontend/css/code/stylus'
    },

    deploy: {
        assets: './../../_deploy/design/assets',
        dir: './../../_deploy',
        jade: './../../_deploy/frontend/html/jade',
        js: './../../_deploy/frontend/js',
        jsvendor: './../../_deploy/frontend/js/vendor',
        styl: './../../_deploy/frontend/css/code/stylus'
    },

    readTasks() {
        const PATH = this.path.join(__dirname, this.tasks)

        this
        .fs
        .readdirSync(PATH)
        .forEach((file) => require(`${this.tasks}/${file}`)(this))
    }
}