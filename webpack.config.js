const path = require('path'),
    	webpack = require("webpack");
    	// ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(__dirname);
var config = {
    entry: {
        app: [__dirname + '/app/app.js'],
        vendor: ['angular', 'angular-cookies', 'angular-route', 'angular-sanitize', 'angular-ui-router']
    },
    output: {
        path: __dirname + '/app/js',
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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:"vendor",filename: "vendor.bundle.js"})
    ]

};
module.exports = config;
// ,
//     devServer: {
//         inline: true,
//         port: 10000
//     },
