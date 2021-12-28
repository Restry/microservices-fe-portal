const path = require('path');
const Webpack = require('webpack');
const webpackConfig = require('./webpack.base.config.js');
const WebpackMerge = require('webpack-merge');

const { resolve } = path;
const isDevMode = process.env.NODE_ENV === 'development';
const main = isDevMode ? '../src/entry/main.dev.js' : '../src/entry/main.prod.js';

module.exports = WebpackMerge(webpackConfig, {
    mode: 'development',
    entry: {
        app: resolve(__dirname, main)
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
    ]
});

