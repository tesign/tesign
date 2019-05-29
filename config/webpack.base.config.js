const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
	return path.join(__dirname,'..',dir)
}
module.exports = {
	context: path.resolve(__dirname, '../'),
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@': resolve('src'),
			'Doc':resolve('doc'),
		}
	},
	module: {
		rules: [{
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react'],
				}
			},
			{
				test: /.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
				}]
			},
			{
				test: /\.css$/,
				loader:['style-loader','css-loader'],
			},
			{
				test: /\.(png|svg|jpg|webp|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf|woff)(\?.*)?$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.md$/,
				loader:['babel-loader','react-markdown-loader']
			}
		],
	}
};