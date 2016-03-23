module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: [/\.svg/, /\.eot/, /\.ttf/, /\.eot/],
				loader: 'file-loader'
			},
			{
				test: [/\.woff/, /\.woff2/],
				loader: "url-loader?limit=100000&minetype=application/font-woff"
			}
		]
	}
};