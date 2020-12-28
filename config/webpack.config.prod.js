const { dist, src } = require('./paths')
const { eslintLoader, fontLoader, imgLoader, jsLoader, nunjucksLoader, sassLoader } = require('./loaders')
const { MiniCssExtractConf, OptimizeCSSAssetsConf, TerserConf, htmlPluginConf } = require('./plugins')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  name: 'prod',
  mode: 'production',
  context: src,
  entry: {
    app: ['./js/app.js', './scss/app.scss']
  },
  output: {
    // library: 'app',
    // libraryTarget: 'umd',
    path: dist,
    filename: 'js/[name].[hash:8].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  stats: { all: false, colors: true, assets: true },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin(OptimizeCSSAssetsConf),
      new TerserPlugin(TerserConf)
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin(htmlPluginConf),
    new MiniCssExtractPlugin(MiniCssExtractConf),
    new FriendlyErrorsWebpackPlugin()
  ],
  module: {
    rules: [
      eslintLoader,
      fontLoader(false),
      imgLoader(false),
      jsLoader,
      sassLoader(false),
      nunjucksLoader
    ]
  }
}
