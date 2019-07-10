const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isAnalyze = process.env.BUNDLE_ANALYZE !== "undefined";
let plugins = [];

if (isAnalyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'public', 'assets'),
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(process.cwd(), 'src'),
          path.resolve(process.cwd(), 'initializers', 'server')
        ],
        use: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [
      path.relative(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  plugins
}
