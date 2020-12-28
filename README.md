# 📦 Webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Webpack boilerplate for static websites that has all the necessary modern tools and optimizations built-in.

![Webpack Boilerplate](https://habrastorage.org/webt/zf/yk/ky/zfykkyinjrwoogwfvwber-lhh9w.jpeg)


## 🚀 Usage

```bash
# Clone repo
git clone https://github.com/alsolovyev/webpack-boilerplate.git project-name

# Navigate to the project dir
cd project-name

# Install all dependencies
yarn          # npm install

# Run webpack-dev-server and let magic happen
yarn start    # npm start

# Build project from sources
yarn build    # npm run-script build
```


## 🔨 Task list

- [x] ~~Run loaders in a working pool~~ [ec50a3b](https://github.com/alsolovyev/webpack-boilerplate/commit/d8339aba49d25c0af5fbb70debad7fe4b9cda5fe)
- [ ] Run linter in a separate process 


## Features

- [Webpack](https://webpack.js.org)
- [Nunjucks](https://mozilla.github.io/nunjucks)
- [Babel](https://babeljs.io)
- [Sass](https://sass-lang.com)
- [PostCSS](https://postcss.org)
- [ESLint](https://eslint.org)
- [Stylelint](https://stylelint.io)


## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Webpack development server

### Nunjucks

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Create HTML files
- [`simple-nunjucks-loader`](https://ogonkov.github.io/nunjucks-loader) - Webpack loader for Nunjucks templates
  - [`nunjucks`](https://mozilla.github.io/nunjucks) - Templating engine

### JS

- [`babel-loader`](https://github.com/babel/babel-loader) - Babel loader for webpack
  - [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
  - [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader) - ESlint loader for webpack
  - [`eslint`](https://eslint.org) - Find problems in your JavaScript code
  - [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code with ESLint
- [`Terser Plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minify JavaScript

### CSS

- [`sass-loader`](https://github.com/webpack-contrib/sass-loader) - Compile Sass to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`css-loader`](https://github.com/webpack-contrib/css-loader) - Compile CSS to CommonJS
- [`postcss-loader`](https://github.com/postcss/postcss-loader) - Process CSS with PostCSS
  - [`cssnano`](https://github.com/cssnano/cssnano) - Optimize and compress PostCSS
  - [`autoprefixer`](https://github.com/postcss/autoprefixer) - Add vendor prefixes
- [`style-loader`](https://github.com/webpack-contrib/style-loader) - Inject CSS into the DOM
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) - A Stylelint plugin for webpack
  - [`stylelint`](https://stylelint.io) - Linter for SASS files. Avoid errors and enforce conventions in your styles
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize\minimize CSS files

### Common

- [`chokidar`](https://github.com/paulmillr/chokidar) - Watch for files changes
- [`friendly-errors-webpack-plugin`](https://github.com/geowarin/friendly-errors-webpack-plugin) - Prettify terminal output
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove build folder(s) before building
- [`file-loader`](https://github.com/webpack-contrib/file-loader) - File Loader
- [`cache-loader`](https://github.com/webpack-contrib/cache-loader) - Cache loader results
- [`thread-loader`](https://github.com/webpack-contrib/thread-loader) - Run loaders in a worker pool


## Authors
* **[Aleksey Solovyev](https://github.com/alsolovyev)** - [solovyev.a@icloud.com](mailto:solovyev.a@icloud.com)


## License
This project is licensed under the [MIT](./LICENSE) License
