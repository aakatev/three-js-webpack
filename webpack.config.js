const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
    hot: true,
  },
}
