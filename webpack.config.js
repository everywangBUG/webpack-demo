const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "./main.tsx"),//入口文件,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000, // 设置端口号
    open: true, // 自动打开浏览器
    hot: true, // 启用热模块替换
    historyApiFallback: true, // 启用HTML5 History API以处理404错误

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
    new HTMLWebpackPlugin(
      {
        filename: 'index.html',
        template: path.join(__dirname, 'index.html'),
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.css|less$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {noEmit: false},
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
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