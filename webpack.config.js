// we need to let webpack know where our app kicks off, the entry point and where to bundle that file => output

const path = require('path');

module.exports = {
  entry: './src/playground/redux-expensify.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

// visit webpack.js.org for documentation

// we will use a loader that runs through babel via: yarn add babel-core@6.25.0 babel-loader@7.1.1
// babel core module allows you to run babel from things like webpack
// babel-loader is a webpack plugin

// we set up loader with rules for webpack in Lecture 54
// added a test that uses regexpressions to look for files that end with .js

// added a rule to look for .css files test: /\.css$/
// https://www.npmjs.com/package/style-loader

// added sass loader: yarn add sass-loader@6.0.6 node-sass@4.5.3
