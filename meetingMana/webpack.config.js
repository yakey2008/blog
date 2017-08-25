const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/main.js",
    devServer: {
        port: 3000,
        compress: false,
        proxy: {
            // '/mt': {
            //     // target: 'http://10.100.68.57:40000',
            //     target: 'http://10.100.69.209:40000',
            //     pathRewrite: {
            //         '^/mt': '/api/Meeting'
            //     },
            //     changeOrigin: true
            // },
            '/api/Meeting': {
                // target: 'http://eric-hu-1:40000',
                target: 'http://10.100.69.232:40000',
                // target: 'http://10.100.69.209:40000',
                // target:'http://gzoaweb04.sit.vipshop.com:9000/EWS.RestAPI',
                changeOrigin: true
            }
        }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dist.js",
        publicPath: "dist/"
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
                loader: 'babel-loader',
                query:{presets:['es2015']},
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]?[hash]'
                }
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