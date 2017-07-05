/* Webpack base settings */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = require('../paths.js');

module.exports = {

  entry: './src/index.jsx',

  // Loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|lib)/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      }
    ]
  },

  // Allows absolute imports from src directory and node_modules
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    modules: [
      path.join(PATHS.root, PATHS.src),
      'node_modules'
    ]
  },

  plugins: [
    // Injects output script on index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // Injects CSS stylesheet
    new ExtractTextPlugin({ filename: '[name].css' }),
    // Creates global variables
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
