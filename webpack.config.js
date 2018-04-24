// we need to let webpack know where our app kicks off, the entry point and where to bundle that file => output

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};

// visit webpack.js.org for documentation

// we will use a loader that runs through babel via: yarn add babel-core@6.25.0 babel-loader@7.1.1
// babel core module allows you to run babel from things like webpack
// babel-loader is a webpack plugin

// we set up loader with rules for webpack in Lecture 54
// added a test that uses regexpressions to look for files that end with .js
