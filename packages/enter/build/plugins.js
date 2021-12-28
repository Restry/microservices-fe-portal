const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const config = require("../src/config");
const { resolve } = Path;

const PluginConfig = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: resolve(__dirname, "../index.ejs"),
    inject: false,
    title: "title",
    minify: {
      collapseWhitespace: false,
    },
    meta: {
      all: Object.assign(config[0], config[1]),
      route: config[1],
      outputTime: new Date().getTime(),
    },
  }),
  new CopyWebpackPlugin([
    {
      from: Path.resolve(__dirname, "../src/js/"),
      to: Path.resolve(__dirname, "../dist/js/"),
    },
    {
      from: Path.resolve(__dirname, "../src/style/"),
      to: Path.resolve(__dirname, "../dist/style/"),
    },
    {
      from: Path.resolve(
        __dirname,
        "../../../node_modules/element-ui/lib/index.js"
      ),
      to: Path.resolve(__dirname, "../dist/js/element-ui.js"),
    },
  ]),
];

module.exports = PluginConfig;
