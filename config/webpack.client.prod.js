const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const config = {
  // Tell webpack to produce source maps for production
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: shouldUseSourceMap ? 'source-map' : false,

  // Tell webpack the root file of our
  // server application
  entry: path.resolve(__dirname, '../src/client/client.js'),

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: '[id].[hash].chunk.js',
    path: path.resolve(__dirname, '../public')
  },

  // Tell webpack to manage scss files using loaders
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: true,
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9'
                    ],
                    flexbox: 'no-2009'
                  })
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },

  // Tell webpack to customize the compiled
  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css', {
      allChunks: true
    }),
    // Minify JS
    new UglifyJsPlugin({
      sourceMap: true
    }),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: `Kaufberater`,
      template: path.resolve(__dirname, '../src/helpers/renderer.prod.js'),
      filename: path.resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ]
};

module.exports = merge(baseConfig, config);
