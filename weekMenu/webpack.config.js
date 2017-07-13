const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/main.js",
    devServer: {
        port: 3000,
        compress: false,
        proxy: {
            '/Region': {
                target: 'http://t00005255.corp.vipshop.com:8045',
                pathRewrite: {
                    '^/Region': '/Menu/Region'
                },
                changeOrigin: true
            },
            '/Menu': {
                target: 'http://t00005255.corp.vipshop.com:8045',
                pathRewrite: {
                    '^/Menu': '/Menu'
                },
                changeOrigin: true
            },
            '/picUpload': {
                target: 'http://t00005255.corp.vipshop.com:8045',
                pathRewrite: {
                    '^/picUpload': '/Menu/UploadImage'
                },
                changeOrigin: true
            },
            '/Feedback':{
                target: 'http://t00005255.corp.vipshop.com:8045',
                pathRewrite: {
                    '^/Feedback': '/Menu/Feedback'
                },
                changeOrigin: true
            }
        }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dist.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
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
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}