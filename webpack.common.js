const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  target: 'web', // default
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              // esModule: false,
              name: '[name].[hash].[ext]',
              outputPath: 'imgs'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                "transform-vue-jsx",
              ],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}