/* Webpack development settings */

const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const PATHS = require('../paths.js');
const path = require('path');

module.exports = merge(baseConfig, {

  output: {
    filename: '[name].js',
    path: path.resolve(PATHS.root, PATHS.dev)
  },

  stats: {
    errorDetails: true
  },

  devtool: 'source-map'

});
