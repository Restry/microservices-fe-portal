const Path = require('path');
const Webpack = require('webpack');
const webpackConfig = require('./webpack.base.js');
const WebpackMerge = require('webpack-merge');
const BasePlugins = require('./plugins');

const { resolve } = Path;

module.exports = WebpackMerge(webpackConfig, {
    mode: 'development',
    entry: {
        app: resolve(__dirname, '../src/main')
    },
    plugins: [
        ...BasePlugins,
        new Webpack.HotModuleReplacementPlugin()
    ]
});
