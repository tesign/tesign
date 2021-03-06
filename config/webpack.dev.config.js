const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
require('./watcher.js');//监听目录
module.exports = merge(baseWebpackConfig,{
  entry: {
    app:'./doc/index.js',
  },
  output: {
    filename: 'static/js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    hot:true
  },
  plugins:[
    // new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './doc/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:7].css'
    }),
  ]
})