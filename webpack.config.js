var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	plugins: [new ExtractTextPlugin('style.css')],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
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