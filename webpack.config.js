const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require('dotenv').config();

const {NODE_ENV, PORT} = process.env;

module.exports = {
  mode: NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './'),
    ],
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'},
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: 'defaults'}],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|mp4)$/,
        use: [
          'file-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
};
