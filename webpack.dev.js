const path = require("path")
const common = require('./webpack.common')
const { merge } = require("webpack-merge")
var HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'less-loader', // 1. Turns sass into css
        ], // actually execute css-loader first, then style-loader
      },
      {
        test: /\.styl(us)?$/i,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'stylus-loader', // 1. Turns sass into css
        ], // actually execute css-loader first, then style-loader
      },
    ]
  },
  devServer: {
    port: 8001,
    host: 'localhost', // '0.0.0.0' not working
    overlay: {
      errors: true, // 出现了任何错误都让其展示到网页上面方便查看
    },
    hot: true,
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    }
  },
})