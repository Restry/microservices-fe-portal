const Path = require('path');

const { resolve } = Path;

module.exports = {
    devtool: 'source-map',
    output: {
        path: resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: 'js/[name]-[chunkhash:6].js',
        library: 'app',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ejs/,
                use: ['ejs-loader'],
            },
            {
                test: /\.css$/,
                use: ['thread-loader', 'style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['thread-loader', 'babel-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loaders: 'url-loader',
                exclude: /node_modules/,
                options: {
                    limit: 8192,
                    outputPath: 'img/',
                    name: '[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.less', '.vue'],
    }
};
