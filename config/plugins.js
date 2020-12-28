const { nunjucksData, scss, stylelintConfig } = require('./paths')


/** HTMLWebpackPlugin */
const htmlPluginConf = {
  template: 'home.njk',
  filename: 'index.html',
  templateParameters: nunjucksData
}


/** MiniCssExtractPlugin */
const MiniCssExtractConf = {
  filename: 'css/[name].[hash:8].css',
  chunkFilename: 'css/[id].[hash:8].css'
}


/** OptimizeCSSAssetsPlugin */
const OptimizeCSSAssetsConf = {
  cssProcessorOptions: {
    map: { inline: false, annotation: true }
  }
}


/** TerserPlugin */
const TerserConf = {
  test: /\.js(\?.*)?$/i,
  sourceMap: true,
  parallel: 4,
  cache: true
}


/** stylelint-webpack-plugin */
const stylelintPluginConf = {
  configFile: stylelintConfig,
  context: scss
}


module.exports = { MiniCssExtractConf, OptimizeCSSAssetsConf, stylelintPluginConf, TerserConf, htmlPluginConf }
