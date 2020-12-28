const path = require('path')


/** Get current working directory */
const cwd = process.cwd()


module.exports = {
  dist: path.resolve(cwd, 'dist'),
  eslintConfig: path.resolve(__dirname, '.eslintrc'),
  js: path.resolve(cwd, 'src', 'js'),
  nunjucksData: require(path.resolve(cwd, 'src', 'data', 'data.js')),
  scss: path.resolve(cwd, 'src', 'scss'),
  stylelintConfig: path.resolve(__dirname, '.stylelintrc'),
  src: path.resolve(cwd, 'src'),
}
