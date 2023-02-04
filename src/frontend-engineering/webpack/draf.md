## 入口(entry)

入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图(dependency graph) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

默认值是 `./src/index.js`，但你可以通过在 webpack configuration 中配置 `entry` 属性，来指定一个（或多个）不同的入口起点。例如：

**webpack.config.js**

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

## 输出(output) 

output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。

你可以通过在配置中指定一个 output 字段，来配置这些处理过程：

**webpack.config.js**

```js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

在上面的示例中，我们通过 `output.filename` 和 `output.path` 属性，来告诉 webpack bundle 的名称，以及我们想要 bundle 生成(emit)到哪里。可能你想要了解在代码最上面导入的 [path](http://nodejs.cn/api/path.html#path_path_resolve_paths) 模块是什么，它是一个 Node.js 核心模块，用于操作文件路径。

注意：即使可以存在多个入口起点，但只指定一个输出配置。

## loader

webpack 只能理解 JavaScript 和 JSON 文件。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。

**注意**：loader 能够 import 导入任何类型的模块（例如 .css 文件），这是 webpack 特有的功能，其他打包程序或任务执行器的可能并不支持。我们认为这种语言扩展是很有必要的，因为这可以使开发人员创建出更准确的依赖关系图。

在更高层面，在 webpack 的配置中 loader 有两个属性：

1. `test` 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2. `use` 属性，表示进行转换时，应该使用哪个 loader。

**webpack.config.js**

```js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

以上配置中，对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性：test 和 use。这告诉 webpack 编译器(compiler) 如下信息：

“嘿，webpack 编译器，当你碰到「在 `require()/import` 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先 使用 raw-loader 转换一下。”


loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

### 使用 loader

在你的应用程序中，有三种使用 loader 的方式：

- 配置（推荐）：在 **webpack.config.js** 文件中指定 loader。
- 内联：在每个 `import` 语句中显式指定 loader。
- CLI：在 shell 命令中指定它们。

### 配置(configuration) 

`module.rules` 允许你在 webpack 配置中指定多个 loader。 这种方式是展示 loader 的一种简明方式，并且有助于使代码变得简洁和易于维护。同时让你对各个 loader 有个全局概览：

loader **从右到左**地取值(evaluate)/执行(execute)。在下面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```

### loader 特性 

- loader 支持链式传递。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 期望 JavaScript。
- loader 可以是同步的，也可以是异步的。
- loader 运行在 Node.js 中，并且能够执行任何 Node.js 能做到的操作。
- loader 可以通过 options 对象配置（仍然支持使用 query 参数来设置选项，但是这种方式已被废弃）。
- 除了常见的通过 ``package.json`` 的 `main` 来将一个 npm 模块导出为 loader，还可以在 `module.rules` 中使用 `loader` 字段直接引用一个模块。
- 插件(plugin)可以为 loader 带来更多特性。
- loader 能够产生额外的任意文件。

通过（loader）预处理函数，loader 为 JavaScript 生态系统提供了更多能力。 用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译和[更多其他特性](https://webpack.docschina.org/loaders)。

### 关于loader

一个 loader 其实就是一个 Node.js 模块，这个模块需要导出一个函数。 这个导出的函数的工作就是获得处理前的原内容，对原内容执行处理后，返回处理后的内容。

1. **一个最简单的 loader**

```js
module.exports = function(source) {
  // source 为 compiler 传递给 Loader 的一个文件的原内容
  // 该函数需要返回处理后的内容，这里简单起见，直接把原内容返回了，相当于该 Loader 没有做任何转换
  return source;
};
```

2. **Webpack 还提供一些 API 供 Loader 调用**

- 获取 options

```js
const loaderUtils = require('loader-utils');
module.exports = function(source) {
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this);
  return source;
};
```

- 返回其他内容

例如以用 babel-loader 转换 ES6 代码为例，它还需要输出转换后的 ES5 代码对应的 Source Map，以方便调试源码。

```js
module.exports = function(source) {
  // 通过 this.callback 告诉 Webpack 返回的结果
  this.callback(null, source, sourceMaps);
  // 当你使用 this.callback 返回内容时，该 Loader 必须返回 undefined，
  // 以让 Webpack 知道该 Loader 返回的结果在 this.callback 中，而不是 return 中 
  return;
};
```

## 插件(plugin)

loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。

想要使用一个插件，你只需要 `require()` 它，然后把它添加到 `plugins` 数组中。多数插件可以通过选项（`option`）自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 `new` 操作符来创建它的一个实例。

**webpack.config.js**

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

在上面的示例中，html-webpack-plugin 为应用程序生成 HTML 一个文件，并自动注入所有生成的 bundle。

插件是 webpack 的支柱功能。webpack 自身也是构建于你在 webpack 配置中用到的相同的插件系统之上！插件目的在于解决 loader 无法实现的其他事。

### 剖析

webpack 插件是一个具有 `apply` 方法的 JavaScript 对象。`apply` 方法会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。

**ConsoleLogOnBuildWebpackPlugin.js**

```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始！');
    });
  }
}
```

compiler hook 的 `tap` 方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个常量，以便它可以在所有 hook 中复用。



## 模式(mode)

通过选择 development, production 或 none 之中的一个，来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 production。

```js
module.exports = {
  mode: 'production'
};
```

## 模块(module)

在模块化编程中，开发者将程序分解成离散功能块 (discrete chunks of functionality)，并称之为**模块**。

每个模块具有比完整程序更小的接触面，使得校验、调试、测试轻而易举。 精心编写的模块提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。

### webpack 模块

对比 Node.js 模块，webpack 模块能够以各种方式表达它们的依赖关系，几个例子如下：

- ES2015 `import` 语句
- CommonJS `require()` 语句
- AMD `define` 和 `require` 语句
- css/sass/less 文件中的 `@import` 语句。
- 样式（`url(...)`）或 HTML 文件（`<img src=...>`）中的图片链接

### 模块解析

resolver 是一个库(library)，用于帮助找到模块的绝对路径。 一个模块可以作为另一个模块的依赖模块，然后被后者引用，如下：

```js
import foo from 'path/to/module';
// 或者
require('path/to/module');
```

所依赖的模块可以是来自应用程序代码或第三方的库(library)。 resolver 帮助 webpack 从每个如 `require/import `语句中，找到需要引入到 bundle 中的模块代码。 当打包模块时，webpack 使用 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 来解析文件路径。

#### webpack 中的解析规则

**1. 绝对路径**

```js
import '/home/me/file';

import 'C:\\Users\\me\\file';
```

由于我们已经取得文件的绝对路径，因此不需要进一步再做解析。

**2. 相对路径**

```js
import '../src/file1';
import './file2';
```

在这种情况下，使用 `import` 或 `require` 的资源文件所在的目录，被认为是上下文目录 (context directory)。在 `import/require` 中给定的相对路径，会拼接此上下文路径 (context path)，以产生模块的绝对路径。

**3. 模块路径**

```js
import 'module';
import 'module/lib/file';
```

模块将在 `resolve.modules` 中指定的所有目录内搜索。 你可以替换初始模块路径，此替换路径通过使用 `resolve.alias` 配置选项来创建一个别名。

一旦根据上述规则解析路径后，resolver 将检查路径是否指向文件或目录。如果路径指向一个文件：

- 如果路径具有文件扩展名，则被直接将文件打包。
- 否则，将使用 [`resolve.extensions`] 选项作为文件扩展名来解析，此选项告诉 resolver 在解析中能够接受哪些扩展名（例如 `.js`, `.jsx`）。

如果路径指向一个文件夹，则采取以下步骤找到具有正确扩展名的正确文件：

- 如果文件夹中包含 `package.json` 文件，则按照顺序查找 `resolve.mainFields` 配置选项中指定的字段。通过 `package.json` 中的第一个字段确定文件路径。
- 如果不存在 `package.json` 文件或者 `package.json` 文件中的 main 字段没有返回一个有效路径，则按照顺序查找 `resolve.mainFiles` 配置选项中指定的文件名，看是否能在 import/require 目录下匹配到一个存在的文件名。
- 文件扩展名通过 `resolve.extensions` 选项，采用类似的方法进行解析。

webpack 根据构建目标 (build target)，为这些选项提供了合理的默认配置。

**说明一下路径解析一些“名称”的含义：**

1. `__dirname` 是 Node.js 中的一个全局变量，它指向当前执行脚本所在的目录。
  
2. Node.js 的 path 模块提供了一些用于处理文件路径的小工具

- 连接路径：`path.join([path1][, path2][, ...])`

`path.join()` 方法可以连接任意多个路径字符串。要连接的多个路径可做为参数传入。`path.join()` 方法在接边路径的同时也会对路径进行规范化。例如：

```js
var path = require('path');

//合法的字符串连接
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') // '/foo/bar/baz/asdf'

//不合法的字符串将抛出异常
path.join('foo', {}, 'bar') // TypeError: Arguments to path.join must be strings'
```

- 路径解析：`path.resolve([from ...], to)`

`path.resolve()` 方法可以将多个路径解析为一个规范化的绝对路径。其处理方式类似于对这些路径逐一进行 cd 操作，与 cd 操作不同的是，这引起路径可以是文件，并且可不必实际存在（`resolve()` 方法不会利用底层的文件系统判断路径是否存在，而只是进行路径字符串操作）。例如：

```js
path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
```

相当于:

```shell
cd foo/bar
cd /tmp/file/
cd ..
cd a/../subfile
```

```js
path.resolve('/foo/bar', './baz') // '/foo/bar/baz'
path.resolve('/foo/bar', '/tmp/file/') // '/tmp/file'
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// 当前工作路径是 /home/itbilu/node，输出路径如下
// '/home/itbilu/node/wwwroot/static_files/gif/image.gif'
```

3. 看看一个例子

**webpack.config.js**

```js
const path = require('path')
let myPath = path.join(__dirname,'/img/so');
let myPath2 = path.join(__dirname,'./img/so');
let myPath3 = path.resolve(__dirname,'/img/so');
let myPath4 = path.resolve(__dirname,'./img/so');
console.log(__dirname); //D:\11 GitHub\jenkins-automated-build\build       
console.log(myPath); //D:\11 GitHub\jenkins-automated-build\build\img\so    
console.log(myPath2); //D:\11 GitHub\jenkins-automated-build\build\img\so  
console.log(myPath3); //D:\img\so
console.log(myPath4); //D:\11 GitHub\jenkins-automated-build\build\img\so  
```

如果按照上面的 `extensions`，引入一个css文件的时候省略了扩展名，就会报错

```js
import '@/assets/css/base';

// 正确的引入
import '@/assets/css/base.css'
import 'assets/css/base.css' // 配了 assets 这个 alias
```

```shell
ERROR  Failed to compile with 1 errors                                                                                                 22:24:45
This dependency was not found:
* @/assets/css/base in ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/HelloWorld.vue

To install it, you can run: npm install --save @/assets/css/base
```

## 依赖图

任何时候，一个文件依赖于另一个文件，webpack 就把此视为文件之间有依赖关系。这使得 webpack 可以接收非代码资源(non-code asset)（例如图像或 web 字体），并且可以把它们作为**依赖**提供给你的应用程序。

webpack 从命令行或配置文件中定义的一个模块列表开始，处理你的应用程序。 从这些入口起点开始，webpack 递归地构建一个依赖图，这个依赖图包含着应用程序所需的每个模块，然后将所有这些模块打包为少量的 bundle - 可由浏览器加载。