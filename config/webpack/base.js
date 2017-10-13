/* Webpack base settings */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = require('../paths.js');
const Dotenv = require('dotenv-webpack');

// Resolve paths from process.cwd
const resolve = dir => path.join(process.cwd(), dir);

module.exports = {

  entry: resolve(path.join(paths.SRC, 'index.jsx')),

  output: {
    publicPath: '/'
  },

  // Loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|lib)/,
        use: ['babel-loader']
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader']
      }
    ]
  },

  // Allows absolute imports from src directory (@) and node_modules
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.styl'],
    modules: [
      'node_modules'
    ],
    alias: {
      '@': resolve(paths.SRC)
    }
  },

  plugins: [

    // Injects output script on index.html
    new HtmlWebpackPlugin({
      template: resolve(path.join(paths.SRC, 'index.html')),
      inject: 'body',
      filename: 'index.html'
    }),

    // Loads variables from .env
    new Dotenv({
      systemvars: true,
      silent: true
    })
  ]
};
