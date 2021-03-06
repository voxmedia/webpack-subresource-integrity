var SriPlugin = require('webpack-subresource-integrity');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename:
      '[name]-[hash]-[chunkhash]-[hash:4]-[chunkhash:4]-[id]-[query].js',
    crossOriginLoading: 'anonymous'
  },
  plugins: [new SriPlugin({ hashFuncNames: ['sha256', 'sha384'] })]
};
