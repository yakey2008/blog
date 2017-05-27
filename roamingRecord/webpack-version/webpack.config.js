const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./js/main.js",
    devServer: {
        port: 3000,
        compress:false
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dist.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [{
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new es3ifyPlugin()
    ],
    devtool: 'source-map'
}