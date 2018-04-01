const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const webpackNodeExternals = require('webpack-node-externals');
const config = {
 // inform webpack that we're building a bundle for node rather than for browser
 target: 'node',
 //tell webpack the rot file of our server application
 entry: ['babel-polyfill', './src/index.js'],
 //tell webpack where to put the output
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'build')
 },
 externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
