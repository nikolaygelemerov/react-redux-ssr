const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we're building a bundle
  // fir NodeJs, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: path.resolve(__dirname, 'src/index.js'),

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, config);
