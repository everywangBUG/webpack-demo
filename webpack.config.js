const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: './src/index.ts',
      dependOn: 'shared'
    },
    print: {
      import: './src/print.ts',
      dependOn: 'shared'
    },
    shared: 'lodash'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000, // 设置端口号
    open: true, // 自动打开浏览器
    hot: true, // 启用热模块替换
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
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
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};