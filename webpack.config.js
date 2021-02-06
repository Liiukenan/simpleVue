const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin=require("vue-loader/lib/plugin.js")
module.exports = {
  mode: 'development',
  // 入口
  entry: __dirname + '/src/js/index.js',
  // 出口
  output: {
    // 路径
    path: path.resolve(__dirname, 'dist'),
    // 名称
    filename: 'bundle.js'
  },
  devServer: {
    compress: true,
    port: 3000,
    stats: 'errors-only',
    open: true,
    hot: true
  },
  module: {
    // 模块
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader',"stylus-loader"]
        
      },
      { test:/\.vue$/, use:"vue-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包的模板地址
      // contentBase: path.resolve(__dirname, 'dist'),
      template: './src/index.html',
      // 插入body底部
      // inject: 'body',
      title: 'my app',
      minify: true
      // hash: true
    }),
    new vueLoaderPlugin()
  ]
}
