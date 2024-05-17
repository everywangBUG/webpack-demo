const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single',
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      title: '输出'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  }
};