const Path = require('path');
const Merge = require('webpack-merge');
const webpack = require('webpack');
const BaseConfig = require('./webpack.base');
const BasePlugins = require('./plugins');

const { resolve } = Path;

module.exports = Merge(BaseConfig, {
    mode: 'development',
    entry: {
        app: resolve(__dirname, '../src/main')
    },
    plugins: [
        ...BasePlugins,
        new webpack.BannerPlugin(new Date().toString()),
        new webpack.DefinePlugin({ 
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
});
