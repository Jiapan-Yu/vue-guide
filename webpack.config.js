const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  // devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ], // actually execute css-loader first, then style-loader
      }
    ]
  },
}