/**
 * Created by Rayr Lee on 2017/2/6.
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const HappyPack = require('happypack');
const {assign} = Object;

const os = require('os'), happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

const HAPPY_CONF = {
    threadPool: happyThreadPool,
    debug: true
};

module.exports = {
    mode: 'production',
    entry: require('./entry'),
    output: {
        path: path.resolve(__dirname, '../build'),
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['happypack/loader?id=css']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['happypack/loader?id=scss']
                })
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
                            name: 'img/[name].[hash:6].[ext]'
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
                            name: 'fonts/[name].[hash:6].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    minChunks: 1
                }
            }
        }),
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
        new HappyPack(assign(HAPPY_CONF, {
            id: 'css',
            loaders: ['css-loader']
        })),
        new HappyPack(assign(HAPPY_CONF, {
            id: 'scss',
            loaders: ['css-loader', 'sass-loader']
        })),
        new ExtractTextPlugin({
            'filename': 'css/styles.[hash:6].css'
        }),
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
            cssProcessorOptions: {
                discardComments: {removeAll: true},
                autoprefixer: false
            },
            canPrint: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: path.resolve(__dirname, '../build/index.html'),
            inject: 'body'
        })
    ]
};
