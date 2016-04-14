var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({template: './index.html', inject: false})
	],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
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