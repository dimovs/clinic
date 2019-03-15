const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: './src/app.js',

	devtool: 'source-map',

	devServer: {
    contentBase: path.join(__dirname, 'public')
  },

	module: {
		rules: [{
		    test: /\.html$/,
		    use: [{loader: 'html-loader'}]
		  },
			{
				test: /\.scss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					{loader: 'css-loader'},
					{loader: 'postcss-loader', options: {
						ident: 'postcss',
						plugins: [require('autoprefixer')]
					}},
					{loader: 'sass-loader'}
				]
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]'
						}
					}
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new HtmlWebpackPlugin({
			title: 'Регистрация',
			template: './src/pages/index.html',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Ввод номера полиса ОМС',
			template: './src/pages/number.html',
			filename: 'number.html'
		})
		,
		new HtmlWebpackPlugin({
			title: 'Выбор специальности врача',
			template: './src/pages/specialties.html',
			filename: 'specialties.html'
		})
		,
		new HtmlWebpackPlugin({
			title: 'Выбор врача',
			template: './src/pages/specialists.html',
			filename: 'specialists.html'
		})
		,
		new HtmlWebpackPlugin({
			title: 'Выбор времени приема',
			template: './src/pages/dates.html',
			filename: 'dates.html'
		})
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
}