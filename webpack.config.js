const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry files
	entry: ['@babel/polyfill', './src/app.js'],
	// 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	plugins: [
		// 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
		// new MiniCssExtractPlugin({ filename: 'css/style.css' }),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src/js')],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS, using Node Sass by default
				],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/')
		}
	},
	devtool: 'source-map',
	// https://webpack.js.org/concepts/mode/#mode-development
	mode: 'development'
};
