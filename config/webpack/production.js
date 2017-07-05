/* Webpack production settings */

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.js');
const PATHS = require('../paths.js');

module.exports = merge(baseConfig, {

  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(PATHS.root, PATHS.dist)
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]

});
