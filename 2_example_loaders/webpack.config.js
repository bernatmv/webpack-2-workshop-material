const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');

var path = require('path');

// variables
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

// helper methods
const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

// webpack configuration
module.exports = {
    context: sourcePath,
    entry: {
        main: './app.js'
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            },
            { 
                test: /\.html$/, 
                use: 'html-loader' 
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractLess
    ],
    devServer: {
        contentBase: sourcePath,
        compress: true
    }
};