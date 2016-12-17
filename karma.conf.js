// Karma configuration
// Generated on Tue Feb 02 2016 21:20:59 GMT-0200 (Horário brasileiro de verão)
var istanbul = require('browserify-istanbul');
var threshold = require('karma-threshold-reporter');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'spec/*.js'
        ],
        included: false,
        webpack: require('./webpack.config.js'),
        webpackMiddleware: {
            stats: 'errors-only'
        },
        preprocessors: {
            'spec/*.js': ['webpack']
        },
        reporters: ['spec', 'coverage', 'threshold'],
        thresholdReporter: {
            statements: 80,
            branches: 50,
            functions: 85,
            lines: 90
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}