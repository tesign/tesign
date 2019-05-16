const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: {
    app:'./examples/index.js',
  },
  output: {
    filename: 'static/js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
    alias:{
      '@': resolve('src'),
    }
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    hot:true
  },
  module:{
  	rules:[
      {
        test:/(\.jsx|\.js)$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['env','react'],  
        }
      },
      {
        test: /\.less$/,
         use:[
         MiniCssExtractPlugin.loader,
         'css-loader',
         'less-loader'
        ],
        exclude:/node_modules/,
      },
      {
        test:  /\.css$/,
         use:[
         MiniCssExtractPlugin.loader,
         'css-loader',
        ],
        exclude:/node_modules/,
      },
      {
       test: /\.(png|svg|jpg|webp|gif)$/,
       use: [
         'file-loader'
       ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use:[
          'file-loader'
        ]
      } 
    ],
  },
  plugins:[
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:7].css'
    })
  ]
};