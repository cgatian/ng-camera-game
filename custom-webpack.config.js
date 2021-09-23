const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false),
    }),
    new NodePolyfillPlugin()
  ]
};