'use strict'

module.exports = {
    // LIBS EXTERNAL
    babel: require('gulp-babel'),
    changed: require('gulp-changed'),
    data: require('gulp-data'),
    del: require('del'),
    extend: require('extend'),
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
        back: './../../backend',
        dir: './../..',
        jade: './../../frontend/html/jade',

        // FRONT
        jsJquery: './../../frontend/js/jQuery',
        jsVanillajs: './../../frontend/js/vanillajs',

        // VENDOR
        vendorJquery: './../../frontend/js/_vendor/jquery-2.2.0.min.js',

        // BACK
        php: './../../backend/php',

        styl: './../../frontend/css/code/stylus'
    },

    deploy: {
        api: './../../_deploy/api',
        assets: './../../_deploy/assets',
        css: './../../_deploy/css',
        dir: './../../_deploy',
        jade: './../../_deploy',
        js: './../../_deploy/js',
        jsVendor: './../../_deploy/js/vendor',

        // BACK
        php: './../../_deploy/api/php'
    },

    jsonData: {},

    extendJsonData(file) {
        const fileJade = this.path.basename(file.path, '.jade')

        const dirname = this.path.dirname(file.path)
        const route = this.path.resolve(__dirname, dirname, `_${fileJade}.js`)

        const jsonData = (this.fs.existsSync(route)) ? require(route) : {}

        this.extend(true, this.jsonData, jsonData)

        return this.jsonData
    },

    readTasks() {
        const PATH = this.path.join(__dirname, this.tasks)

        this
        .fs
        .readdirSync(PATH)
        .forEach((file) => require(`${this.tasks}/${file}`)(this))
    }
}