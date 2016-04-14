var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './index.js',
	devtool: 'source-map',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	plugins: [new ExtractTextPlugin('style.css')],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader?sourceMap=true!sass-loader?sourceMap=true')
			},
			{
				test: [/\.svg/, /\.eot/, /\.ttf/, /\.eot/],
				loader: 'file-loader'
			},
			{
				test: [/\.woff/, /\.woff2/],
				loader: "url-loader?limit=100000&minetype=application/font-woff"
			},
			{
				test : /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
};