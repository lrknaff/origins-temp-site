const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// const PATHS = {
//   app: path.join(__dirname, 'lib'),
//   build: path.join(__dirname, 'build')
// }

module.exports = {
  entry: {
    main: './lib/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.css$/, loader: "css-loader" },
      { test: /\.scss$/, use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }] }
    ]
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: PATHS.build + 'index.html',
  //     title: 'Origin',
  //     inject: 'body'
  //   })
  // ],
  // resolve: {
  //   extensions: ['', '.js', '.json', '.scss', 'css']
  // }
}
