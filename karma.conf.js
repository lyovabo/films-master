var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');
// webpackConfig.module.loaders = [
//   {
//     test: /\.js$/,
//     exclude: /node_modules/,
//     loader: 'babel-loader'
//   }
// ];


module.exports = function(config) {
    config.set({
        // ... normal karma configuration
        frameworks: [ 'jasmine' ],
        basePath: './',
        files: [
            // all files ending in "_test"

            'app/js/vendor.bundle.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/js/app.bundle.js',
            'test/*_test.js',
            'test/**/*_test.js'
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            // 'app/js/app.bundle.js':['webpack'],
            // 'app/js/vendor.bundle.js':['webpack'],
            'test/*_test.js': ['webpack'],
            'test/**/*_test.js': ['webpack'],
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,
            // and use stats to turn off verbose output
            // stats: {
            //     // options i.e. 
            //     chunks: false
            // }
        },

        plugins: [ 
            webpack,
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-htmlfile-reporter'
           
        ],
         htmlReporter: {
            outputFile: 'test/logs/units.html',
                    
              // Optional 
              pageTitle: 'Unit Tests',
              subPageTitle: 'A sample project description',
              groupSuites: true,
              useCompactStyle: true,
              useLegacyStyle: true
            },
            "reporters": ["progress","html"],
        //  junitReporter: {
        //     outputFile: 'test-results-karma.xml',
        //     suite: ''
        // },

        browsers: ['PhantomJS'],

    });
};