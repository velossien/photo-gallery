const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: './app/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production',
            template: __dirname + '/app/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    }
};