'use strict';

var webpack = require('webpack');
var path = require('path');

var PLUGIN_NAME = require('./package.json').name;
var DEV = process.env.NODE_ENV !== "production";
var ENTRY = ['./src/index.js'];
var EXTERNALS = {};

if(DEV){
	ENTRY.unshift('pixi.js');
}else{
	EXTERNALS['pixi.js'] = "PIXI";
}

module.exports = {
	devtool: 'source-map',
	entry: ENTRY,
	output: {
		filename: 'build/' + PLUGIN_NAME + '.js'
	},
  resolve: {
    extensions: ["", ".js"]
  },
  externals : EXTERNALS,
	module: {
    postLoaders: [
      {
        loader: "transform?brfs"
      }
    ],
		loaders: [
			{
				test: /\.json$/,
				include: path.join(__dirname, 'node_modules', 'pixi.js'),
				loader: 'json',
			},
			{
				test: /\.js$/,
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-0']
        }
			}
		]
	}
};
