// we need to let webpack know where our app kicks off, the entry point and where to bundle that file => output

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};

// visit webpack.js.org for documentation
