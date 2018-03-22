const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
 //tell webpack the rot file of our server application
 entry: './src/client/client.js',
 //tell webpack where to put the output
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'public')
 }
 //tell webpack to run babel on every file it runs through
};

module.exports = merge(baseConfig, config);
