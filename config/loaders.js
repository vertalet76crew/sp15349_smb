const { eslintConfig, js, scss, src, svgsprite } = require('./paths')
const { getThreadLoader } = require('./utils')
const { loader: MiniCssExtractLoader } = require('mini-css-extract-plugin')


/** JS loader object */
const jsLoader = {
  test: /\.js$/i,
  exclude: /node_modules/,
  include: js,
  use: [
    'cache-loader',
    getThreadLoader('javaScript'),
    {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { 'modules': false, 'loose': true }]],
        plugins: []
      }
    }
  ]
}


/** ESlint loader object */
const eslintLoader = {
  enforce: 'pre',
  test: /\.js$/i,
  exclude: /node_modules/,
  include: js,
  use: [
    'cache-loader',
    getThreadLoader('eslint'),
    {
      loader: 'eslint-loader',
      options: {
        cache: true,
        configFile: eslintConfig
      }
    }
  ]
}


/** Nunjucks loader object */
const nunjucksLoader = {
  test: /\.(njk|nunjucks|html)$/i,
  include: src,
  use: [
    'cache-loader',
    getThreadLoader('nunjucks'),
    {
      loader: 'simple-nunjucks-loader',
      options: {
        searchPaths: ['src'],
        assetsPaths: ['src/images']
      }
    }
  ]
}


/**
 * Create CSS loader object
 * @param {boolean} [isDev=true] - is in development mode
 * @return {object} - sass loader rule
 */
const sassLoader = (isDev = true) => ({
  test: /\.s[ac]ss$/i,
  include: scss,
  use: [
    isDev && 'cache-loader',
    isDev ? 'style-loader' : MiniCssExtractLoader,
    { loader: 'css-loader', options: { sourceMap: true } },
    !isDev && { loader: 'postcss-loader', options: { sourceMap: true, plugins: [ require('autoprefixer') ] }},
    { loader: 'sass-loader', options: { sourceMap: true } }
  ].filter(Boolean)
})


/**
 * Create images loader object
 * @param {boolean} [isDev=true] - is in development mode
 * @return {object} - images loader rule
 */
const imgLoader = (isDev = true) => ({
  test: /\.(gif|png|jpe?g|svg|webp|ico)$/i,
  use: [
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 80
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.70, 0.80],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 80
        }
      }
    },
    { loader: 'file-loader', options: isDev ? { } : { name: '[path][name].[hash:8].[ext]' } }
  ]
})

/**
 * Create fonts loader object
 * @param {boolean} [isDev=true] - is in development mode
 * @return {object} - fonts loader rule
 */
const fontLoader = (isDev = true) => ({
  test: /\.(woff|woff2|ttf|otf|eot)$/i,
  use: [{ loader: 'file-loader', options: isDev ? { } : { name: '[path][name].[hash:8].[ext]' } }]
})


module.exports = { eslintLoader, fontLoader, imgLoader, jsLoader, nunjucksLoader, sassLoader }
