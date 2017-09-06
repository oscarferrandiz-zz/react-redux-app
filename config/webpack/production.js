/* Webpack production settings */

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.js');
const paths = require('../paths.js');

module.exports = merge(baseConfig, {

  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(process.cwd(), paths.DIST)
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]

});
