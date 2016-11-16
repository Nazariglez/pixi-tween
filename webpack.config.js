'use strict';

var webpack = require('webpack');
var path = require('path');
var ExternalsPlugin = require('webpack-externals-plugin');

var PLUGIN_NAME = require('./package.json').name;
// var DEV = process.env.NODE_ENV !== 'production';
var ENTRY = ['./src/index.js'];

module.exports = {
  devtool: 'source-map',
  entry: ENTRY,
  output: {
    filename: 'build/' + PLUGIN_NAME + '.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'pixi.js'),
        loader: 'json'
      },
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  },
  externals: {
    'pixi.js': 'PIXI'
  },
  plugins: [
    new ExternalsPlugin({
      include: path.join(__dirname, 'node_modules', 'pixi.js'),
      type: 'var'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
