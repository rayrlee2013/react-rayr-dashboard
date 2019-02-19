/**
 * Created by Rayr Lee on 2017/2/6.
 */

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HappyPack = require('happypack');
const {assign} = Object;

const os = require('os'), happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

const HAPPY_CONF = {
    threadPool: happyThreadPool,
    debug: true
};

//构建目录
const BUILD = path.resolve(__dirname, '../build')

module.exports = {
    mode: 'production',
    entry: require('./entry'),
    output: {
        path: BUILD,
        filename: 'js/[name].[chunkhash:6].js',
        chunkFilename: 'js/[name].[chunkhash:6].js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
        alias: require('./alias')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=babel']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader'

            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[contenthash:6].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compressor: {
                        sequences: true,
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                },
                canPrint: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                base: {
                    chunks: 'initial',
                    name: 'base',
                    minChunks: 1,
                    minSize: 30000,
                    maxAsyncRequests: 5,
                    maxInitialRequests: Infinity
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../')
        }),
        new WebpackMd5Hash(),
        new webpack.HashedModuleIdsPlugin(),
        new HappyPack(assign(HAPPY_CONF, {
            id: 'babel',
            loaders: [
                {
                    loader: 'babel-loader'
                },
                {
                    loader: 'react-lazyload-loader',
                    options: {
                        loading: {
                            name: 'ComponentLoading',
                            path: 'components'
                        }
                    }
                }
            ]
        })),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[contenthash:6].css',
            chunkFilename: 'css/styles.[contenthash:6].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: path.resolve(__dirname, '../build/index.html'),
            inject: 'body'
        })
    ],
    performance: {
        hints: false
    }
};
