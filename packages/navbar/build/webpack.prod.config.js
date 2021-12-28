const path = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const WebpackConfig = require('./webpack.base.config');

const { resolve } = path;

module.exports = WebpackMerge(WebpackConfig, {
    mode: 'production',
    entry: {
        app: resolve(__dirname, '../src/entry/main.prod.js')
    },
    plugins: [
        new Webpack.BannerPlugin(new Date().toString()),
        new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
    ]
});