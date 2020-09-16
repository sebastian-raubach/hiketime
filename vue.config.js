// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack')

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
