const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin");

const { resolve } = Path;
const { ANALYZE } = process.env;
const { BundleAnalyzerPlugin } = WebpackBundleAnalyzer;

const PluginConfig = [
  // new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: resolve(__dirname, "../index.html"),
  }),
  new vueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].[hash].css",
    chunkFilename: "css/[id].[hash].css",
  }),
  new CopyWebpackPlugin([
    {
      from: Path.resolve(
        __dirname,
        "../../../node_modules/element-ui/lib/index.js"
      ),
      to: Path.resolve(__dirname, "../dist/js/element-ui.js"),
    },
  ]),
];

if (ANALYZE === "true") {
  PluginConfig.push(new BundleAnalyzerPlugin());
}
module.exports = PluginConfig;
