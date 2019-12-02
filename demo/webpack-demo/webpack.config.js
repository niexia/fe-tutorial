const path = require('path')
module.exports = {
  entry:  './app/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
    filename: "bundle.js" // 打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 时才使用
        use: 'babel-loader', // 使用的是哪个loader
        exclude: /node_modules/ // 不包括哪些路径
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            // 配置 url-loader 的可选项
            options: {
              // 限制图片大小 10000B，小于限制会将图片转换为 base64 格式
              limit: 10000,
              // 超出限制，创建的文件格式
              // build/images/[图片名].[hash].[图片格式]
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}
