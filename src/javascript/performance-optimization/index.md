# 性能优化

性能优化像是一个摸索的过程，除了理论基础，还需要不断实践来支撑。知道在什么场景之下该做什么事情，理解核心原理和实践的方案，在开发的过程中去践行和进一步的挖掘。

## 请求过程

性能优化和一个问题息息相关：**从输入 URL 到页面加载完成，发生了什么？**

这个问题非常重要，性能优化最主要的就是琢磨这个问题，围绕这个过程进行优化。

站在性能优化的角度，整个过程是：首先通过 DNS（域名解析系统）将 URL 解析为对应的 IP 地址；然后和这个 IP 对应的服务器建立 TCP 网络连接；随后向服务器发起 HTTP 请求；接着服务器会处理请求，完了之后，返回 HTTP 响应给客户端；最后客户端拿到数据之后，解析并渲染，页面就呈现给用户了。

也就是主要包括这 5 步：

1. DNS 解析
2. TCP 连接
3. HTTP 请求
4. 服务器处理请求，HTTP 响应返回
5. 浏览器拿到响应数据进行解析，把结果呈现给用户。

## 如何优化

为了更快的展示页面，那就需要这些步骤更快的完成。

1. DNS 解析需要时间，那可不可以减少解析次数或者预解析？
2. TCP 链接，能做的有限...
3. HTTP 请求怎样减少请求的次数和请求体积？压缩、浏览器缓存和 Web Store 等。
4. 浏览器怎么进行性能优化？这就涉及服务端渲染、DOM 树构建渲染、回流和重绘、合理的 DOM 操作、懒加载等等

所以在优化上，主要就分成两个部分**网络请求**和**浏览器处理**。

