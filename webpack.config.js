const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    publicPath: '/',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=env&presets[]=react'
      }
    ]
  }
  // ,
  // plugins: [
  //   new CleanPlugin(['dist'], {
  //     root: path.join(__dirname),
  //     verbose: true
  //   })
  // ]
}
