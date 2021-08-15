const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		editor: './src/js/main.ts',
	},
	output: {
		path: `${__dirname}/dist/js`,
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.ttf$/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new MonacoWebpackPlugin({
			languages: ['Laze'],
			features: ['folding'],
		}),
	],
};
