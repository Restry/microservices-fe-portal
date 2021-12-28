const opn = require('opn');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const HistoryApiFallback = require('connect-history-api-fallback');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.dev.config');
const config = require('./config');

const port = process.env.PORT || config.dev.port;
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
const { proxyTable } = config.dev;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

const hotMiddleware = WebpackHotMiddleware(compiler, {
    log: () => {}
});

compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-emit', () => {
        hotMiddleware.publish({ action: 'reload' });
    });
});

Object.keys(proxyTable).forEach(context => {
    let options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options };
    }
    app.use(proxyMiddleware(options.filter || context, options));
});

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(HistoryApiFallback());

app.use(devMiddleware);

app.use(hotMiddleware);

const uri = `${config.dev.protocol}://${config.dev.host}:${port}`;

devMiddleware.waitUntilValid(() => {
    console.log(`> Listening at ${uri}\n`);
});

app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }
    if (autoOpenBrowser) {
        opn(uri);
    }
});
