const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require("happypack");
const BasePlugins = require("./plugins");

const { resolve } = path;
const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
  devtool: process.env.NODE_ENV !== "production" ? "source-map" : "none",
  // 出口
  output: {
    filename: "app.js",
    path: resolve(__dirname, "../dist"),
    chunkFilename: "js/[name]-[chunkhash:6].js",
    publicPath: isDevMode ? "/" : "/children1",
    library: "children1",
    libraryTarget: "umd",
  },
  externals: isDevMode ? {} : ["vue", "vue-router", "element-ui"],
  plugins: [
    ...BasePlugins,
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:6].css",
      chunkFilename: "css/[id].[hash:6].css",
    }),
    new HappyPack({
      /*
       * 必须配置
       */
      // id 标识符，要和 rules 中指定的 id 对应起来
      id: "babel",
      // 需要使用的 loader，用法和 rules 中 Loader 配置一样
      // 可以直接是字符串，也可以是对象形式
      loaders: ["babel-loader?cacheDirectory"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
                require("postcss-plugin-namespace")(".micro-portal-app1"),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
                require("postcss-plugin-namespace")(".micro-portal-app1"),
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["happypack/loader?id=babel"],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loaders: "url-loader",
        exclude: /node_modules/,
        options: {
          limit: 8192,
          outputPath: "img/",
          name: "[name]-[hash:6].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/",
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", "json", ".less", ".css", ".vue"],
    alias: {
      vue$: "vue/dist/vue.common.js",
      "@": resolve(__dirname, "../src"),
      pages: resolve(__dirname, "../src/pages"),
    },
  },
};
