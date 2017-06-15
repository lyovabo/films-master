const path = require('path'),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractSass = new ExtractTextPlugin({
    		filename: "[name].[contenthash].css"
    		
			});

var config = {
        entry: {
            app: [__dirname + '/app/app.js'],
            // vendor: ['angular', 'angular-cookies', 'angular-route', 'angular-sanitize', 'angular-ui-router','angular-mock'],

        },
        output: {
            path: __dirname + '/app/js',
            filename: '[name].bundle.js',
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
					          presets: ['es2015']
					        }
            }],
        //      rules: [{
        //     	test: /\.css$/,
					   // 	use: ExtractTextPlugin.extract({
					   //        fallback: "style-loader",
					   //        use: "css-loader"
					   //      })
					   //    }, { // sass / scss loader for webpack
	       //  	test: /\.(sass|scss)$/,
	       //  	loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
	      	// },
	      	// {
			     //    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			     //    use: [
			     //      {
			     //        loader: 'url-loader',
			     //        options: {
			     //          limit: 10000,
			     //          mimetype: 'application/font-woff'
			     //        }
			     //      }
			     //    ]
			     //  },
			     //  {
			     //    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			     //    use: [
			     //      { loader: 'file-loader' }
			     //    ]
			     //  }
        // ]
    
         
        },
    
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" }),
        // new webpack.optimize.CommonsChunkPlugin({ name: "vendor", chunks: "app.bundle.js" }),
         // new ExtractTextPlugin("styles.css"),  
    ],

};
module.exports = config;
