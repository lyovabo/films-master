var path = require('path'),
    webpack = require("webpack");


var config = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: "sass-loader",
            options: {
                includePaths: ["./sass"]
            }
        }]
    },
    plugins: [],
    devServer: {
        inline: true,
        port: 10000
    },

};
module.exports = config;
