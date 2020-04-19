(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{255:function(t,s,a){t.exports=a.p+"assets/img/javascript-effective-jpg.9046c1b2.png"},256:function(t,s,a){t.exports=a.p+"assets/img/javascript-effective-png.d1c12644.png"},257:function(t,s,a){t.exports=a.p+"assets/img/javascript-effective-cssSprites.3879cf11.png"},258:function(t,s,a){t.exports=a.p+"assets/img/javascript-effective-Base64.7adf8aab.png"},259:function(t,s,a){t.exports=a.p+"assets/img/javascript-effective-WebP1.dc7562a8.png"},260:function(t,s,a){t.exports=a.p+"assets/img/javascript-effective-WebP2.df48562d.png"},380:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"减少请求次数和体积"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减少请求次数和体积"}},[t._v("#")]),t._v(" 减少请求次数和体积")]),t._v(" "),e("p",[t._v("HTTP 连接这一层面的优化才是网络优化的核心，有两大方向："),e("strong",[t._v("减少请求次数")]),t._v("和"),e("strong",[t._v("减少单次请求花费的时间")]),t._v("。")]),t._v(" "),e("p",[t._v("这两个优化直接对应到了日常开发的操作————资源的压缩和合并，这个一般需要配合打包工具一起。在使用 webpack 的时候我们可以做一些优化。")]),t._v(" "),e("h2",{attrs:{id:"webpack-要做的优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-要做的优化"}},[t._v("#")]),t._v(" webpack 要做的优化")]),t._v(" "),e("h3",{attrs:{id:"加快构建速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加快构建速度"}},[t._v("#")]),t._v(" 加快构建速度")]),t._v(" "),e("ol",[e("li",[t._v("不要让 loader 做太多事情")])]),t._v(" "),e("p",[t._v("以 "),e("a",{attrs:{href:"https://webpack.docschina.org/loaders/babel-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-loader"),e("OutboundLink")],1),t._v(" 为例，可以配置 "),e("code",[t._v("exclude")]),t._v(" 排除特定条件，看一下一个官方的例子：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.m?js$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(node_modules|bower_components)/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          presets"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/preset-env'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("这样就避免对 node_modules 文件夹或者 bower_components 文件夹进行处理。")]),t._v(" "),e("p",[t._v("另外还可以开启缓存 "),e("code",[t._v("cacheDirectory")]),t._v("，设置之后，指定的目录（默认是 "),e("code",[t._v("node_modules/.cache/babel-loader")]),t._v("）将用来缓存 loader 的执行结果。之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.m?js$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(node_modules|bower_components)/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者 loader: 'babel-loader?cacheDirectory=true'")]),t._v("\n        loader"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader?cacheDirectory'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          presets"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/preset-env'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("a",{attrs:{href:"https://webpack.docschina.org/plugins/dll-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DllPlugin"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("第三方库，CommonsChunkPlugin 每次构建时都会重新构建一次 vendor，这样效率就降低了。")]),t._v(" "),e("p",[t._v("DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("a",{attrs:{href:"https://github.com/amireh/happypack",target:"_blank",rel:"noopener noreferrer"}},[t._v("Happypack"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("webpack 是单线程的，就算此刻存在多个任务，只能排队一个接一个地等待处理。Happypack 把任务分解给多个子进程去并发执行，大大提高打包效率。")]),t._v(" "),e("p",[t._v("可以为不同的类型/转换定义多个 HappyPack 插件，只需要给每个插件传递唯一的 "),e("code",[t._v("id")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @file webpack.config.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HappyPack "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'happypack'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    threads"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loaders"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'styles'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    threads"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loaders"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'less-loader'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'happypack/loader?id=jsx'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.less$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'happypack/loader?id=styles'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"更合理的打包和压缩文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更合理的打包和压缩文件"}},[t._v("#")]),t._v(" 更合理的打包和压缩文件")]),t._v(" "),e("ol",[e("li",[t._v("拆分资源 "),e("code",[t._v("CommonsChunkPlugin")])]),t._v(" "),e("li",[t._v("通过 "),e("code",[t._v("Tree-Shaking")]),t._v(" 删除冗余代码")]),t._v(" "),e("li",[t._v("使用 "),e("code",[t._v("UglifyJsPlugin")]),t._v(" 压缩并删除冗余代码（console、注释等）")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" UglifyJsPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uglifyjs-webpack-plugin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UglifyJsPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许并发")]),t._v("\n     parallel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启缓存")]),t._v("\n     cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     compress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除所有的console语句    ")]),t._v("\n       drop_console"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把使用多次的静态值自动定义为变量")]),t._v("\n       reduce_vars"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不保留注释")]),t._v("\n       comment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使输出的代码尽可能紧凑")]),t._v("\n       beautify"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("按需加载")])]),t._v(" "),e("p",[t._v("Vue 构建一个单页应用，用 vue-router 来控制路由，十个路由对应了十个页面。这些页面并不需要一次性加载完，所以可以按需加载。当需要某个页面的时候，再对它进行加载。")]),t._v(" "),e("p",[t._v("这是一个异步的方法，webpack 在打包时，每个会被单独打成一个文件，只有在我们跳转某个这个路由的时候，才会真正地去获取的内容。这就是按需加载。")]),t._v(" "),e("h2",{attrs:{id:"http-开启压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-开启压缩"}},[t._v("#")]),t._v(" HTTP 开启压缩")]),t._v(" "),e("p",[t._v("前面是 webpack 的事，日常开发中，还有一个操作就是在 HTTP 请求的时候开启 gzip 压缩。HTTP 压缩就是以缩小体积为目的，对 HTTP 内容进行重新编码的过程。")]),t._v(" "),e("blockquote",[e("p",[t._v("HTTP 压缩是一种内置到网页服务器和网页客户端中以改进传输速度和带宽利用率的方式。在使用 HTTP 压缩的情况下，HTTP 数据在从服务器发送前就已压缩：兼容的浏览器将在下载所需的格式前宣告支持何种方法给服务器；不支持压缩方法的浏览器将下载未经压缩的数据。最常见的压缩方案包括 gzip 和 Deflate。")])]),t._v(" "),e("p",[t._v("gzip 的内核就是 Deflate，目前我们压缩文件用得最多的就是 gzip。可以说，gzip 就是 HTTP 压缩的经典例题。")]),t._v(" "),e("h3",{attrs:{id:"http-如何支持压缩文件的传输"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-如何支持压缩文件的传输"}},[t._v("#")]),t._v(" HTTP 如何支持压缩文件的传输")]),t._v(" "),e("ol",[e("li",[t._v("浏览器请求数据时，通过 "),e("code",[t._v("Accept-Encoding")]),t._v(" 说明自己可以接受的压缩方法")]),t._v(" "),e("li",[t._v("服务端接收到请求后，选取 "),e("code",[t._v("Accept-Encoding")]),t._v(" 中的一种对响应数据进行压缩")]),t._v(" "),e("li",[t._v("服务端返回响应数据时，在 "),e("code",[t._v("Content-Encoding")]),t._v(" 字段中说明数据的压缩方式")]),t._v(" "),e("li",[t._v("浏览器接收到响应数据后根据 "),e("code",[t._v("Content-Encoding")]),t._v(" 对结果进行解压")])]),t._v(" "),e("p",[t._v("注：如果服务器没有对响应数据进行压缩，则不返回Content-Encoding，浏览器也不进行解压")]),t._v(" "),e("h3",{attrs:{id:"要不要使用-gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#要不要使用-gzip"}},[t._v("#")]),t._v(" 要不要使用 gzip")]),t._v(" "),e("p",[t._v("首先要承认 gzip 是高效的，压缩后"),e("strong",[t._v("通常")]),t._v("能帮我们减少响应 70% 左右的大小。但是也要注意到"),e("strong",[t._v("服务器压缩 gzip 需要时间，浏览器解压 gzip 也需要时间")]),t._v("，压缩解压的时间和节约的传输时间相比，是否值得？")]),t._v(" "),e("p",[t._v("如果项目是 1k、2k 的小文件，那不值当，压缩之后大小并没有改变多少。但更多的时候，我们处理的都是具备一定规模的项目文件。实践证明，这种情况下压缩和解压带来的时间开销相对于传输过程中节省下的时间开销来说，可以说是微不足道的。")]),t._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("Nginx 的 "),e("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_gzip_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngx_http_gzip_module"),e("OutboundLink")],1),t._v(" 也提供了开启 GZIP 压缩的方式，下面是一个配置：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 开启gzip\ngzip on;\n\n# 启用gzip压缩的最小文件，小于设置值的文件将不会压缩\ngzip_min_length 1k;\n\n# gzip 压缩级别，1-10，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明\ngzip_comp_level 2;\n\n# 进行压缩的文件类型。javascript有多种形式。其中的值可以在 mime.types 文件中找到。\ngzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript;\n")])])]),e("p",[t._v("浏览器在请求资源的时候再 header 里面带上 accept-encoding: gzip 的参数。Nginx 在接收到 Header 之后，发现如果有这个配置，则发送 GZIP 之后的文件（返回的 header 里也包含相关的说明），如果没有则发送源文件。浏览器根据 response header 来处理要不要针对返回的文件进行解压缩然后展示。")]),t._v(" "),e("h2",{attrs:{id:"图片资源优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片资源优化"}},[t._v("#")]),t._v(" 图片资源优化")]),t._v(" "),e("p",[t._v("对于图片的“优化”来说，更像是“权衡”。需要对图片进行压缩，但是这个优化，会牺牲一部分图片质量，所以需要找到一个平衡点。图片在项目资源当中，占了一个很大的比重，对图片的优化很关键。")]),t._v(" "),e("p",[t._v("现在应用较为广泛的 Web 图片格式有 JPEG/JPG、PNG、WebP、Base64、SVG 等，需要知道它们的特点，才能很好的使用他们。")]),t._v(" "),e("h3",{attrs:{id:"二进制位数与色彩的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二进制位数与色彩的关系"}},[t._v("#")]),t._v(" 二进制位数与色彩的关系")]),t._v(" "),e("p",[t._v("在计算机中，像素用二进制数来表示。不同的图片格式中像素与二进制位数之间的对应关系是不同的。"),e("strong",[t._v("一个像素对应的二进制位数越多，它可以表示的颜色种类就越多，成像效果也就越细腻，文件体积相应也会越大")]),t._v("。")]),t._v(" "),e("p",[t._v("一个二进制位表示两种颜色（0|1 对应黑|白），如果一种图片格式对应的二进制位数有 n 个，那么它就可以呈现 2^n 种颜色。")]),t._v(" "),e("h3",{attrs:{id:"计算图片大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算图片大小"}},[t._v("#")]),t._v(" 计算图片大小")]),t._v(" "),e("p",[t._v("对于一张 100 x 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 RGBA 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1个字节），所以该图片大小大概为 39KB（10000 * 1 * 4 / 1024）。\n但是在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。")]),t._v(" "),e("p",[t._v("所以如何优化图片，有 2 种思路：")]),t._v(" "),e("ul",[e("li",[t._v("减少像素点。")]),t._v(" "),e("li",[t._v("减少每个像素点能够显示的颜色。")])]),t._v(" "),e("h3",{attrs:{id:"jpeg-jpg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jpeg-jpg"}},[t._v("#")]),t._v(" JPEG/JPG")]),t._v(" "),e("ol",[e("li",[t._v("关键词")])]),t._v(" "),e("p",[t._v("有损压缩、体积小、加载快、不支持透明。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("特点")])]),t._v(" "),e("p",[t._v("JPG 最大的特点是有损压缩。这种高效的压缩算法使它成为了一种非常轻巧的图片格式。另一方面，即使被称为“有损”压缩，JPG 的压缩方式仍然是一种高质量的压缩方式：当我们把图片体积压缩至原有体积的 50% 以下时，JPG 仍然可以保持住 60% 的品质。")]),t._v(" "),e("p",[t._v("但是它处理矢量图形和 Logo 等线条感较强、颜色对比强烈的图像时，人为压缩导致的图片模糊会相当明显。此外，JPEG 图像"),e("strong",[t._v("不支持透明度处理")]),t._v("，透明图片需要召唤 PNG 来呈现。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("使用场景")])]),t._v(" "),e("p",[t._v("JPG 适用于呈现色彩丰富的图，日常开发中，JPG 图片经常作为大的背景图、轮播图或 Banner 图出现。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(255),alt:"JPG"}})]),t._v(" "),e("h3",{attrs:{id:"png-8-与-png-24"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png-8-与-png-24"}},[t._v("#")]),t._v(" PNG-8 与 PNG-24")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("关键词：无损压缩、质量高、体积大、支持透明。")])]),t._v(" "),e("li",[e("p",[t._v("特点")])])]),t._v(" "),e("p",[t._v("PNG是一种无损压缩的高保真的图片格式。8 和 24，这里都是二进制数的位数。按照我们前置知识里提到的对应关系，8 位的 PNG 最多支持 256 种颜色，而 24 位的可以呈现约 1600 万种颜色。PNG 图片具有比 JPG 更强的色彩表现力，对线条的处理更加细腻，对透明度有良好的支持。它弥补了上文我们提到的 JPG 的局限性，"),e("strong",[t._v("唯一的 BUG 就是体积太大")]),t._v("。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("使用场景")])]),t._v(" "),e("p",[t._v("考虑到 PNG 在处理线条和颜色对比度方面的优势，主要用它来呈现小的 Logo、颜色简单且对比强烈的图片或背景等。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(256),alt:"PNG"}})]),t._v(" "),e("h3",{attrs:{id:"svg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[t._v("#")]),t._v(" SVG")]),t._v(" "),e("ol",[e("li",[t._v("关键字")])]),t._v(" "),e("p",[t._v("文本文件、体积小、不失真、兼容性好。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("特点")])]),t._v(" "),e("p",[t._v("SVG（可缩放矢量图形）是一种基于 XML 语法的图像格式。它和本文提及的其它图片种类有着本质的不同：SVG 对图像的处理不是基于像素点，而是是基于对图像的形状描述。")]),t._v(" "),e("p",[t._v("SVG 与 PNG 和 JPG 相比，文件体积更小，可压缩性更强。更显著的优势还在于图片可无限放大而不失真。")]),t._v(" "),e("p",[t._v("此外，SVG 是文本文件。我们既可以像写代码一样定义 SVG，把它写在 HTML 里、成为 DOM 的一部分，也可以把对图形的描述写入以 .svg 为后缀的独立文件。")]),t._v(" "),e("p",[t._v("SVG 的局限性主要有两个方面：一方面是它的渲染成本比较高，这点对性能来说是很不利的。另一方面，SVG 存在着其它图片格式所没有的学习成本（它是可编程的）。")]),t._v(" "),e("h3",{attrs:{id:"base64"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[t._v("#")]),t._v(" Base64")]),t._v(" "),e("ol",[e("li",[t._v("关键词")])]),t._v(" "),e("p",[t._v("文本文件、依赖编码、小图标解决方案。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("特点")])]),t._v(" "),e("p",[t._v("Base64 并非一种图片格式，而是一种编码方式。Base64 和雪碧图一样，是作为小图标解决方案而存在的。")]),t._v(" "),e("p",[t._v("雪碧图（CSS Sprites）是一种将小图标和背景图像合并到一张图片上，然后利用 CSS 的背景定位来显示其中的每一部分的技术。相较于一个小图标一个图像文件，单独一张图片所需的 HTTP 请求更少，对内存和带宽更加友好。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(257),alt:"CSS Sprites"}})]),t._v(" "),e("p",[t._v("和雪碧图一样，Base64 图片的出现，也是为了减少加载网页图片时对服务器的请求次数，从而提升网页性能。")]),t._v(" "),e("p",[t._v("Base64 是一种用于传输 8Bit 字节码的编码方式，通过对图片进行 Base64 编码，我们可以直接将编码结果写入 HTML 或者写入 CSS，从而减少 HTTP 请求的次数。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("应用场景")])]),t._v(" "),e("p",[t._v("Base64 主要是处理一些小图片，比如 Logo，可以看一下京东：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(258),alt:"Base64"}})]),t._v(" "),e("p",[t._v("Base64 这么好用，为什么不把大图片也转成 Base64 呢？")]),t._v(" "),e("p",[t._v("因为，Base64 编码后，图片大小会膨胀为原文件的 "),e("strong",[t._v("4/3")]),t._v("（这是由 Base64 的编码原理决定的）。如果我们把大图也编码到 HTML 或 CSS 文件中，后者的体积会明显增加，即便我们减少了 HTTP 请求，也无法弥补这庞大的体积带来的性能开销，得不偿失。")]),t._v(" "),e("p",[t._v("在传输非常小的图片的时候，Base64 带来的文件体积膨胀、以及浏览器解析 Base64 的时间开销，与它节省掉的 HTTP 请求开销相比，可以忽略不计，这时候才能真正体现出它在性能方面的优势。")]),t._v(" "),e("p",[t._v("因此，Base64 并非万全之策，使用 Base64 一般需要满足以下条件：")]),t._v(" "),e("ul",[e("li",[t._v("图片的实际尺寸很小（例如不超过 2kb）。")]),t._v(" "),e("li",[t._v("图片无法以雪碧图的形式与其它小图结合（雪碧图依然是一个减少 HTTP 请求的有效方法，Base64作为补充）。")]),t._v(" "),e("li",[t._v("图片的更新频率非常低（不需要重复编码和修改文件，方便维护）。")])]),t._v(" "),e("p",[t._v("使用 webpack 的 url-loader 可以方便的将图片转为 Base64。")]),t._v(" "),e("h3",{attrs:{id:"webp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webp"}},[t._v("#")]),t._v(" WebP")]),t._v(" "),e("ol",[e("li",[t._v("关键字")])]),t._v(" "),e("p",[t._v("年轻的全能型选手")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("特点")])]),t._v(" "),e("p",[t._v("WebP 像 JPEG 一样对细节丰富的图片信手拈来，像 PNG 一样支持透明，像 GIF 一样可以显示动态图片——它集多种图片文件格式的优点于一身。但是毕竟年轻，"),e("strong",[t._v("兼容性")]),t._v("存在一些问题。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(259),alt:"Webp"}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("应用场景")])]),t._v(" "),e("p",[t._v("WebP 的最大问题不是这个图片是否适合用 WebP，而是浏览器是否支持 WebP。看一下京东也页面：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(260),alt:"Webp"}})]),t._v(" "),e("p",[t._v("对 WebP 兼容性问题的处理方式就非常有趣，"),e("code",[t._v(".webp")]),t._v(" 前面，还跟了一个 "),e("code",[t._v(".jpg")]),t._v(" 后缀！")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Request URL: https://img11.360buyimg.com/vclist/s168x134_jfs/t1/103014/26/2337/15802/5dce86beEd33dc75a/962aa5c322effca1.jpg.webp\n")])])]),e("p",[t._v("也就是这个图片应该至少存在 jpg 和 webp 两种格式！程序会根据浏览器的型号、以及该型号是否支持 WebP 这些信息来决定当前浏览器显示的是 "),e("code",[t._v(".webp")]),t._v(" 后缀还是 "),e("code",[t._v(".jpg")]),t._v(" 后缀。")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5b793126f265da43351d5125",target:"_blank",rel:"noopener noreferrer"}},[t._v("简单聊聊 GZIP 的压缩原理与日常应用"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000012800222",target:"_blank",rel:"noopener noreferrer"}},[t._v("探索HTTP传输中gzip压缩的秘密"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5cb7ee0e51882532fe3440ea",target:"_blank",rel:"noopener noreferrer"}},[t._v("「简明性能优化」双端开启Gzip指南"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000019897234",target:"_blank",rel:"noopener noreferrer"}},[t._v("你必须懂的前端性能优化"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/book/5b936540f265da0a9624b04b/section/5b98ceb46fb9a05d3154f6bd",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片优化——质量与性能的博弈"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);