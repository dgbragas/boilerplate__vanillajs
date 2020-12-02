const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const src = path.join(__dirname, 'src');

module.exports = {
  entry: {
    bundle: path.join(src, 'js', 'main.js'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
