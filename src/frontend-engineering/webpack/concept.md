# webpack 核心概念

上一节的例子中，已经通过一个配置实现来进行打包了，那怎么配置多入口呢？接下来，学习 webpack 的概念和常用的配置。

## entry

`entry` 在 webpack 是非常重要的概念，在 webpack 里，通过 `entry` 指定打包的入口。

webpack 是一个模块打包器，在 webpack 里，所有的都是模块，不管是我们的代码，或者其他资源，图片、字体 等。任何时候，一个文件依赖于另一个文件，webpack 就把此视为文件之间有依赖关系。webpack 根据 `entry` 定义的模块开始处理我们的应用程序。从 `entry` 开始，webpack 递归的构建一个依赖图，这个依赖图包含这应用程序所需的每个模块，然后将所有模块打包为少量的 bundle（通常只有一个），可有浏览器加载。

接下来看看 `entry` 的配置，`entry` 分两种：单入口和多入口。

### 单入口

用法：`entry: string`

**webpack.config.js**
```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

### 多入口

用法：`entry: {[entryChunkName: string]: string}`

**webpack.config.js**
```js
module.exports = {
  entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js'
  }
};
```

> 根据经验：每个 HTML 文档只使用一个入口起点。

## output

`output` 是用来告诉 webpack 如何向硬盘写入编译文件。也就是说 `entry` 是用来告诉 webpack 从哪里开始打包我们的源代码，而 `output` 对应的打包之后的文件的存储。

注意，即使可以存在多个 `entry` 起点，但只指定一个 `output` 配置。

### 单入口配置

比较简单，只需要指定 `filename` 和 `path` 就可以了。

**webpack.config.js**
```js
module.exports = {
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};
```

此配置将一个单独的 `bundle.js` 文件输出到 `dist` 目录中。

### 多入口配置

如果配置创建了多个单独的 "chunk"（例如，使用多个入口起点或使用像 CommonsChunkPlugin 这样的插件），需要通过“**占位符**”确保文件名称的唯一。

**webpack.config.js**
```js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js', // 占位符
    path: __dirname + '/dist'
  }
};
// 写入到硬盘：./dist/app.js, ./dist/search.js
```

## 参考

- [入口起点 entry](https://webpack.docschina.org/concepts/entry-points/)
- [输出 output](https://webpack.docschina.org/concepts/output/)