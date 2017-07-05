const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App paths
const PATHS = {
  src: 'src',
  dist: 'dist',
  root: process.cwd()
};

module.exports = {

  entry: './src/index.jsx',

  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(PATHS.root, PATHS.dist)
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|lib)/,
        use: ['babel-loader']
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
    // Creates global variables
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
