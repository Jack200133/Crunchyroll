const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  target: 'node',
  mode: 'production',
  entry: ['./server/index.jsx'],
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './server'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [ 'css-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}
