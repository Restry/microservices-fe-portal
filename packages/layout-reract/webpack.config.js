const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { resolve } = path
const isDevMode = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: isDevMode ? 'source-map' : 'none',
  // 出口
  output: {
    filename: 'app.js',
    path: resolve(__dirname, './dist'),
    chunkFilename: 'js/[name]-[chunkhash:6].js',
    publicPath: isDevMode ? '/' : '/layout',
    // library: 'layout',
    libraryTarget: 'umd',
  },
  entry: {
    app: resolve(__dirname, `./src/entry/base.js`),
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.less', '.css', '.js'],
    alias: {
      '@': resolve(__dirname, './src'),
      pages: resolve(__dirname, './src/pages'),
    },
  },

  devServer: { contentBase: path.join(__dirname, 'src') },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'css-modules-typescript-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './dist/index.html',
      template: resolve(__dirname, './src/index.html'),
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:6].css',
      chunkFilename: 'css/[id].[hash:6].css',
    }),
    new HappyPack({
      /*
       * 必须配置
       */
      // id 标识符，要和 rules 中指定的 id 对应起来
      id: 'babel',
      // 需要使用的 loader，用法和 rules 中 Loader 配置一样
      // 可以直接是字符串，也可以是对象形式
      loaders: ['babel-loader?cacheDirectory'],
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/plugins'),
        to: path.resolve(__dirname, './dist/plugins'),
      },
    ]),
  ],
}
