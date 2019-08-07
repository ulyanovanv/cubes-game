const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js|jsx$/i,
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
    },

    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            'postcss-loader',
            "sass-loader"
          ]
        },
        {
          test: /\.js|jsx$/,
          exclude: /(node_modules|dist)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false
            }
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: devMode ? '[path][name].[ext]' : '[hash].[ext]',
              outputPath: 'images'
            }
          }
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: devMode ? '[path][name].[ext]' : '[hash].[ext]',
              outputPath: 'fonts'
            }
          }
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css'
      }),
      new HtmlWebpackPlugin({
        title: 'Cubes game',
        template: 'src/index.html',
        favicon: './assets/images/favicon.ico',
        cache: true,
        showErrors: true
      }),
      new CopyWebpackPlugin([
        { from: './assets/images', to: 'images' },
        { from: './assets/fonts', to: 'fonts' }
      ])
    ],

    devServer: {
      open: true,
      filename: 'index.js',
      historyApiFallback: true,
    }
  }
};
