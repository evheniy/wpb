const { resolve } = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const settings = {
  context: resolve(__dirname, '.'),
  entry: {
    index: './src/index.js',
    history: './src/history/index.js',
    store: './src/store/index.js',
    test: './src/test/index.js',
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'lib'),
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
  ],
};

module.exports = settings;
