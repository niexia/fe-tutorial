# 懒加载

延迟加载也称为惰性加载，即在长网页中延迟加载图像。用户滚动到它们之前，视口外的图像不会加载。这与图像预加载相反，在长网页上使用延迟加载将使网页加载更快。在某些情况下，它还可以帮助减少服务器负载。

举个例子：当打开淘宝首页的时候，只有在浏览器窗口里的图片才会被加载，当你滚动首页向下滑的时候，进入视口内的图片才会被加载，而其它从未进入视口的图像不会也不会加载。

懒加载的好处：

1. 提升用户体验：试想一下，如果打开页面的时候就将页面上所有的图片全部获取加载，如果图片数量较大，对于用户来说简直就是灾难，会出现卡顿现象，影响用户体验。
2. 减轻服务器压力：有选择性地请求图片，这样能明显减少了服务器的压力和流量，也能够减小浏览器的负担。

下面通过 3 种方式实现懒加载。

## 原理

将页面中的 `img` 标签 `src` 指向一张小图片或者 `src` 为空，然后定义 `data-src`（这个属性可以自己定义）属性指向真实的图片。`src` 指向一张默认的图片，否则当 `src` 为空时也会向服务器发送一次请求。可以指向 `loading` 的地址。

```html
<img src="default.jpg" data-src="https://avatars1.githubusercontent.com/u/28384700?v=4" />
```

当载入页面时，先把可视区域内的 `img` 标签的 `data-src` 属性值负给 `src`，然后监听滚动事件，把用户即将看到的图片加载。这样便实现了懒加载。

注意：图片要指定宽高。

```html
<html>
  <head>
    <meta charset="UTF-8">
    <title>lazy-load</title>
    <style>
      img {
        display: block;
        margin-bottom: 50px;
        width: 400px;
        height: 400px;
      }
    </style>
  </head>
  <body>
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <script>
      document.body.scrollTop = 10000;
      function lazyload() {
        // 视口高度
        var viewHeight = window.innerHeight || document.documentElement.clientHeight;
        // 所有需要懒加载的图片
        var imgs = document.querySelectorAll("img[lazyload=true]");
        [].slice.apply(imgs).forEach(function (img) {
          var rect = img.getBoundingClientRect();
          // 如果在视口的范围内，替换图片地址
          // top: 相对于底部，要出现在视口以上
          // bottom: 相对于顶部，不能已经滚动出视口
          if (rect.top < viewHeight && rect.bottom >= 0) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('lazyload');
          }
        })
      }
      // 页面载入完毕加载可是区域内的图片
      lazyload();
      window.onscroll = lazyload;
    </script>
  </body>
</html>
```

## 使用节流函数进行性能优化

如果直接将函数绑定在 `scroll` 事件上，当页面滚动时，函数会被高频触发，这非常影响浏览器的性能。

需要限制触发频率，来优化性能。这就用到 `throttle` 函数了：

```js
function throttle(fn, interval) {
  let last = 0;
  let timer = null;
  return function (...args) {
    let now = Date.now();
    if (now - last >= interval) {
      fn.apply(this, args);
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, interval)
    }
  }
}

// 优化
window.onscroll = throttle(lazyload, 500);
```

## 通过 IntersectionObserver API 来实现懒加载

目前有一个新的 IntersectionObserver API，可以自动"观察"元素是否可见，Chrome 51+ 已经支持。由于可见（visible）的本质是，目标元素与视口产生一个交叉区，所以这个 API 叫做"交叉观察器"。

上面的方式比较传统，监听到 `scroll` 事件后，调用目标元素的 `getBoundingClientRect()` 方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于 `scroll` 事件密集发生，计算量很大，容易造成性能问题。

```html
<html>
  <head>
    <meta charset="UTF-8">
    <title>lazy-load</title>
    <style>
      img {
        display: block;
        margin-bottom: 50px;
        width: 400px;
        height: 400px;
      }
    </style>
  </head>
  <body>
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww1.sinaimg.cn/large/006y8mN6gw1fa7kaed2hpj30sg0l9q54.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <img src="" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" lazyload="true" alt="">
    <script>
      function query(selector) {
        return Array.from(document.querySelectorAll(selector));
      }
      // 目标元素的可见性变化时，就会调用观察器的回调函数 callback
      // callback 函数的参数（entries）是一个数组，每个成员都是一个 IntersectionObserverEntry 对象
      var observer = new IntersectionObserver(function (items) {
        items.forEach(function(item) {
          if (item.isIntersecting === true) {
            var target = item.target;
            target.src = target.getAttribute('data-src');
            observer.unobserve(target);
          }
        })
      });
      query('img[lazyload]').forEach(function (item) {
        // 观察所有需要懒加载图片
        observer.observe(item);
      });
    </script>
  </body>
</html>
```

## 参考

- [实现图片懒加载(Lazyload)](https://juejin.im/post/583b10640ce463006ba2a71a)
- [https://zhuanlan.zhihu.com/p/25455672](https://zhuanlan.zhihu.com/p/25455672)
- [IntersectionObserver API 使用教程](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)