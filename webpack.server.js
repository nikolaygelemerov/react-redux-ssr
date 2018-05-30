const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
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

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },

  externals: [nodeExternals()]
};
