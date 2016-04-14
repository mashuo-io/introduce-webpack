var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: './index.js',
	output: {

		filename: 'bundle.js'
	},
	plugins: [
		new ExtractTextPlugin('style.css')

	],
	module: {
		loaders: [
			{
				test: [/\.svg/, /\.eot/, /\.ttf/, /\.eot/],
				loader: 'file'
			},
			{
				test: [/\.woff/, /\.woff2/],
				loader: "url?limit=100000&minetype=application/font-woff"
			},
			{
				test : /\.js$/,
				loader: 'babel'
			}
		]
	}
};

if (process.env.NODE_ENV === "production") {
	config.output.path = __dirname + '/dist';
	config.plugins = config.plugins.concat([
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({template: './index.html', inject: false})
	]);
	config.module.loaders.push({
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract('css!sass')
	})
} else {
	config.output.path = __dirname;
	config.devtool = "source-map";
	config.module.loaders.push({
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
	})

}

module.exports = config;