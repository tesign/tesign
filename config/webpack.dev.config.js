const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
module.exports = merge(baseWebpackConfig,{
  entry: {
    app:'./examples/index.js',
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
      template: './examples/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:7].css'
    })
  ]
})