const path = require('path');
const webpack = require('webpack');
function resolve (dir) {
  return path.join(__dirname,'..', dir)
}
module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve:{
    extensions: ['.js', '.jsx', '.json'],
    alias:{
      '@': resolve('src'),
    }
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
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader", options: {
                    paths: [
                        path.resolve(__dirname, "node_modules")
                    ]
                }
            }]
      },
      {
        test:  /\.css$/,
         use:[
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
  
};