var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var browser_path = path.resolve(__dirname, 'browser');
var server_path = path.resolve(__dirname, 'server');
var dist_path = path.resolve(__dirname, 'dist');

var browserConf = {
    target: 'web',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        index: path.resolve(browser_path, 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(dist_path, 'static')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: true
        })
    ]
}

var serverConf = {
    target: 'node',
    resolve: {
        extensions: ['.js']
    },
    externals: [nodeExternals()],
    entry: {
        server: path.resolve(server_path, 'index.js') 
    },
    output: {
        filename: '[name].js',
        path: dist_path
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: false
        })
    ]
}

module.exports = [browserConf, serverConf];