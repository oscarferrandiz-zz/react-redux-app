/* Webpack development settings */

const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const path = require('path');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = merge(baseConfig, {

  stats: {
    errorDetails: true
  },

  devtool: 'source-map',

  plugins: [
    new WebpackBrowserPlugin({
      port: 3000,
      url: 'http://localhost'
    })
  ]

});
