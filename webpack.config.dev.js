const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const publicPath = 'http://localhost:8080/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
module.exports = {
  entry: ['./src/index.js', './src/demo.js', hotMiddlewareScript],
  output: {
    filename: 'index.min.js',
    path: path.resolve('./dev'),
    publicPath: publicPath,
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:  ['react', 'env']
        }
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]', 'less-loader']
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'static/images/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      util: path.resolve(path.join(__dirname, 'src', 'util')),
      static: path.resolve(path.join(__dirname, 'src', 'static'))
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'static', 'index_default.html'),
      title: 'react-float'
    }),
    new ExtractTextPlugin('static/react-float.css')
  ]
}
