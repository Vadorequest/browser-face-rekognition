const slsw = require('serverless-webpack'); // XXX https://github.com/serverless-heaven/serverless-webpack
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  // "isLocal" is a boolean property that is set to true if any known mechanism is used in the current Serverless invocation, that code is running locally.
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production', // XXX https://github.com/serverless-heaven/serverless-webpack/blob/master/README.md
  optimization: {
    //minimize: false, // in production is defaultValue is True
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false, // TODO
  },
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve('/server'),// TODO
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
};

