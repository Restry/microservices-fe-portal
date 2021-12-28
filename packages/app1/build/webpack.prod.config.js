const path = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const WebpackConfig = require('./webpack.base.config');

const { resolve } = path;

module.exports = WebpackMerge(WebpackConfig, {
    mode: 'production',
    // 入口
    entry: {
        app: resolve(__dirname, '../src/entry/main.prod.js')
    },
    plugins: [
        new Webpack.BannerPlugin(new Date().toString()),
        // 定义全局环境变量
        new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
    ]
});