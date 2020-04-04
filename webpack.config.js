const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.[contentHash].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = config;
