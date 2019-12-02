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
      }
    ]
  }
}
