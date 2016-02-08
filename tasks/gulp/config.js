'use strict'

module.exports = {
    // LIBS EXTERNAL
    babel: require('gulp-babel'),
    changed: require('gulp-changed'),
    coffeescript: require('gulp-coffee'),
    data: require('gulp-data'),
    del: require('del'),
    extend: require('extend'),
    gulp: require('gulp'),
    jade: require('gulp-jade'),
    runSequence: require('run-sequence'),
    stylus: require('gulp-stylus'),
    template: require('gulp-template'),
    typescript: require('gulp-typescript'),
    yargs: require('yargs').argv,

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
        jsVendor: './../../frontend/js/_vendor',

        // CSS
        stylus: './../../frontend/css/code/stylus'
    },

    deploy: {
        assets: './../../_deploy/assets',
        css: './../../_deploy/css',
        dir: './../../_deploy',
        html: './../../_deploy',
        js: './../../_deploy/js',
        jsVendor: './../../_deploy/js/vendor',
        server: './../../_server'
    },

    jsonData: {},

    extendJsonData(file) {
        const fileJade = this.path.basename(file.path, '.jade')

        const dirname = this.path.dirname(file.path)
        const route = this.path.resolve(__dirname, dirname, `_${fileJade}.js`)

        const jsonData = (this.fs.existsSync(route)) ? require(route) : {}

        this.extend(true, jsonData, this.jsonData)

        return jsonData
    },

    readTasks() {
        const PATH = this.path.join(__dirname, this.tasks)

        this
        .fs
        .readdirSync(PATH)
        .forEach((file) => require(`${this.tasks}/${file}`)(this))
    }
}