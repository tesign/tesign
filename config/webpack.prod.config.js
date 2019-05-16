const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
function resolve (dir) {
  return path.join(__dirname,'..', dir)
}
module.exports = merge(baseWebpackConfig,{
  entry:'./src/index.js',
  output: {
    filename: 'main.js',
    path:resolve('build'),
    publicPath:'/build/',
    libraryTarget: 'umd',
    library:'tesign',
  },
  plugins:[
	new CleanWebpackPlugin(),
  ]
})