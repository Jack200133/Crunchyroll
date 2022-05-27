module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: 'dist',
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}
