/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile, mode;

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + '.js';
}

const config = {
  mode: mode,
  entry: __dirname + '/JumboPlusDisplay.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '../../../lib/jumboplus',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
	    {
		    test: /(\.jsx|\.js)$/,
		    loader: 'eslint-loader',
		    exclude: /node_modules/
	    }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('.')],
    extensions: ['.json', '.js']
  }
};

module.exports = config;
