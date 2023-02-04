# fe-tutorial

这是一份整理的前端学习笔记，主要是关于学习前端的过程和知识的梳理，包括计算机基础知识、JavaScript、工程化 等，这个过程中也参考了很多的文章和课程，感谢这些内容帮助。期望这份笔记也可以对你学习前端有帮助，有问题可以提 [issue](https://github.com/niexia/fe-tutorial/issues) 进行讨论，这份笔记应该会不断更新。

阅读之后，如果对你有帮助，可以给我一个 star～

访问完整的[文档](https://niexia.github.io/fe-tutorial/)

## JavaScript

### JavaScript 知识整理

- [执行环境和执行栈](https://niexia.github.io/fe-tutorial/javaScript/%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83%E5%92%8C%E6%89%A7%E8%A1%8C%E6%A0%88.html)
- [作用域和闭包](https://niexia.github.io/fe-tutorial/javaScript/%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E9%97%AD%E5%8C%85.html)
- [this]()
- [执行环境和执行栈](https://niexia.github.io/fe-tutorial/javaScript/this.html)
- [对象、原型和原型链](https://niexia.github.io/fe-tutorial/javaScript/%E5%AF%B9%E8%B1%A1%E3%80%81%E5%8E%9F%E5%9E%8B%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE.html)
- [实现继承](https://niexia.github.io/fe-tutorial/javaScript/%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF.html#%E5%8E%9F%E5%9E%8B%E9%93%BE)
- [实现 new](https://niexia.github.io/fe-tutorial/javaScript/%E5%AE%9E%E7%8E%B0new.html)
- [call、apply 和 bind](https://niexia.github.io/fe-tutorial/javaScript/%E5%AE%9E%E7%8E%B0call,apply%E5%92%8Cbind.html#call)
- [实现 instanceof](https://niexia.github.io/fe-tutorial/javaScript/%E5%AE%9E%E7%8E%B0instanceof.html)
- [深拷贝和浅拷贝](https://niexia.github.io/fe-tutorial/javaScript/%E6%B7%B1%E6%8B%B7%E8%B4%9D%E5%92%8C%E6%B5%85%E6%8B%B7%E8%B4%9D.html)
- [节流函数和防抖函数](https://niexia.github.io/fe-tutorial/javaScript/%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0%E5%92%8C%E9%98%B2%E6%8A%96%E5%87%BD%E6%95%B0.html)
- [高阶函数](https://niexia.github.io/fe-tutorial/javaScript/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0.html)
- [函数柯里化](https://niexia.github.io/fe-tutorial/javaScript/%E5%87%BD%E6%95%B0%E6%9F%AF%E9%87%8C%E5%8C%96.html)
- [EventEmitter](https://niexia.github.io/fe-tutorial/javaScript/EventEmitter.html)
- [实现异步打印](https://niexia.github.io/fe-tutorial/javaScript/%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E6%89%93%E5%8D%B0.html)
- [数组去重，扁平化和最值](https://niexia.github.io/fe-tutorial/javaScript/%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D,%E6%89%81%E5%B9%B3%E5%8C%96%E5%92%8C%E6%9C%80%E5%80%BC.html)
- [数组乱序](https://niexia.github.io/fe-tutorial/javaScript/%E6%95%B0%E7%BB%84%E4%B9%B1%E5%BA%8F.html)
- [懒加载](https://niexia.github.io/fe-tutorial/javaScript/%E6%87%92%E5%8A%A0%E8%BD%BD.html)
- [无限滚动](https://niexia.github.io/fe-tutorial/javaScript/%E6%97%A0%E9%99%90%E6%BB%9A%E5%8A%A8.html)

### RegExp

- [正则表达式](https://niexia.github.io/fe-tutorial/javaScript/RegExp/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.html)
- [RegExp 构造函数属性](https://niexia.github.io/fe-tutorial/javaScript/RegExp/RegExp%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95.html#%E5%AE%9A%E4%B9%89%E6%96%B9%E5%BC%8F)
- [应用](https://niexia.github.io/fe-tutorial/javaScript/RegExp/%E5%BA%94%E7%94%A8.html)

### 浏览器工作原理

- [浏览器的多进程和JS单线程](https://niexia.github.io/fe-tutorial/javaScript/browser/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%92%8CJS%E5%8D%95%E7%BA%BF%E7%A8%8B.html)
- [浏览器的渲染过程](https://niexia.github.io/fe-tutorial/javaScript/browser/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B.html)
- [Event Loop](https://niexia.github.io/fe-tutorial/javaScript/browser/EventLoop.html)
- [栈空间和堆空间](https://niexia.github.io/fe-tutorial/javaScript/browser/%E6%A0%88%E7%A9%BA%E9%97%B4%E5%92%8C%E5%A0%86%E7%A9%BA%E9%97%B4.html)
- [垃圾回收](https://niexia.github.io/fe-tutorial/javaScript/browser/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html)

### 性能优化

- [性能优化](https://niexia.github.io/fe-tutorial/javaScript/effective/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html#%E8%AF%B7%E6%B1%82%E8%BF%87%E7%A8%8B)
- [DNS 缓存和预解析](https://niexia.github.io/fe-tutorial/javaScript/effective/DNS%E7%BC%93%E5%AD%98%E5%92%8C%E9%A2%84%E8%A7%A3%E6%9E%90.html#dns-%E8%A7%A3%E6%9E%90%E8%BF%87%E7%A8%8B)
- [减少请求次数和体积](https://niexia.github.io/fe-tutorial/javaScript/effective/%E5%87%8F%E5%B0%91%E8%AF%B7%E6%B1%82%E6%AC%A1%E6%95%B0%E5%92%8C%E4%BD%93%E7%A7%AF.html#webpack-%E8%A6%81%E5%81%9A%E7%9A%84%E4%BC%98%E5%8C%96)
- [利用缓存](https://niexia.github.io/fe-tutorial/javaScript/effective/%E5%88%A9%E7%94%A8%E7%BC%93%E5%AD%98.html#http-%E7%BC%93%E5%AD%98)
- [CDN](https://niexia.github.io/fe-tutorial/javaScript/effective/CDN.html#cdn-%E7%9A%84%E8%BF%87%E7%A8%8B)
- [浏览器渲染机制和优化](https://niexia.github.io/fe-tutorial/javaScript/effective/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6%E5%92%8C%E4%BC%98%E5%8C%96.html#_1-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93-%E6%9B%B4%E5%BF%AB%E9%80%9F%E5%9C%B0%E7%9C%8B%E5%88%B0%E5%AE%8C%E6%95%B4%E6%B8%B2%E6%9F%93%E7%9A%84%E9%A1%B5%E9%9D%A2)

## 其他

除了前面的内容，也整理了一些计算机基础知识和打包工具的笔记。

- [数据结构和算法](https://niexia.github.io/fe-tutorial/algo/)
- [网络协议](https://niexia.github.io/fe-tutorial/network/)
- [前端工程化](https://niexia.github.io/fe-tutorial/fee/)
