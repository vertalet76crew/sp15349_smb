const { src } = require('./paths')
const { eslintLoader, fontLoader, imgLoader, jsLoader, nunjucksLoader, sassLoader } = require('./loaders')
const { htmlPluginConf, stylelintPluginConf } = require('./plugins')
const { watchFileChanges } = require('./utils')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  name: 'dev',
  mode: 'development',
  context: src,
  entry: {
    app: ['./js/app.js', './scss/app.scss']
  },
  resolve: {
    extensions: ['.js', '.scss', '.png', '.jpg'],
    alias: {
      '@': src
    }
  },
  devtool: 'inline-eval',
  stats: { all: false, colors: true, timings: true },
  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    hot: true,
    quiet: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    before: watchFileChanges,
    watchOptions: {
      ignored: ['node_modules/**']
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HTMLWebpackPlugin(htmlPluginConf),
    new StylelintPlugin(stylelintPluginConf),
    new FriendlyErrorsWebpackPlugin()
  ],
  module: {
    rules: [
      eslintLoader,
      fontLoader(true),
      imgLoader(true),
      jsLoader,
      sassLoader(true),
      nunjucksLoader
    ]
  }
}
