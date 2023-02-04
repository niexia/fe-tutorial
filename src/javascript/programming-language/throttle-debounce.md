# 节流函数和防抖函数

在一些场景下会遇到频率很高的事件或者连续的事件，例如 `scroll`、`mousemove`、`onresize` 等，如果不进行性能的优化，就有可能造成页面的卡顿现象。**我们需要做的是降低触发回调的频率**，解决这类问题，常用的就是节流函数和防抖函数。

## 节流函数 throttle

简单的说，函数节流能使得连续的函数执行，变为**固定时间段间断地执行**。

以 `scroll` 事件为例：

```js
window.onscroll = function() {
  console.log('hello world');
};
```

轻轻滚动下窗口，控制台打印了多个 hello world 字符串。如果 `scroll` 回调不是简单的打印字符串，而是涉及一些 DOM 操作，这样频繁的调用，低版本浏览器可能就会直接假死。为了解决这个问题，希望可以间隔时间段触发回调的执行，比如上面的例子每 1000ms 打印一次，如何实现之？

实现的方式有两种：

1. 使用时间戳，记录上次执行的时间戳，然后每次触发 `scroll` 事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经到达 1000ms，如果是，则执行，并更新上次执行的时间戳，如此循环：

```js
function throttle(fn, interval) {
  // 上一次执行 fn 的时间
  let last = 0;
  return function(...args) {
    let now = Date.now();
    if (now - last > interval) {
      last = now;
      fn.apply(this, args);
    }
  }
}
```

1. 使用定时器，比如当 `scroll` 事件刚触发时，设置个 1000ms 的定时器，此后每次触发 `scroll` 事件触发回调，如果已经存在定时器，则回调不执行方法，直到定时器触发，`timer` 被清除，然后重新设置定时器。

```js
function throttle(fn, interval) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, interval)
  }
}
```

是一般的使用场景，这两种方式都可以满足了，只是还存在一点问题：

- 第一种的缺陷是：当事件停止触发时，不会执行最后一次回调。相当于每次都在间隔的开头执行。
- 第二种的缺陷是：第一次执行会延迟，事件触发结束之后还存在定时器，所以会执行最后一次方法。相当于每次都在间隔的结尾执行。

### 定时器和时间戳结合

这里将定时器和时间戳结合起来：

```js
function throttle(fn, interval) {
  let last = 0;
  let timer = null;
  return function (...args) {
    let now = Date.now();
    if (now - last >= interval) { // 如果时间间隔大于等于设定的时间间隔阈值，则执行
      last = now;
      fn.call(this, args);
    } else { // 如果时间间隔小于设定的时间间隔阈值，生成定时器，执行最后一次调用
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.call(this, args);
      }, interval)
    }
  }
}
```

虽然上面保证最后一次可以执行，每次定时都是 `interval` 会存在一个问题，已经忽略掉了 now - last 这段等待的时间，所以就可能导致最后一次执行比定义的时间间隔稍长。更加完善的方式应该是：

```js
function throttle(fn, interval) {
  let last = 0;
  let timer = null;
  return function() {
    let now = Date.now();
    let delay = interval - (now - last);
    if (delay <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      last = Date.now();
      fn.apply(this, arguments);
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        last = Date.now();
        fn.apply(this, arguments);
      }, delay)
    }
  }
}
```

### underscore 中 throttle 的实现

underscore 考虑了高级配置，即可以选择是否需要响应事件刚开始的那次回调（配置 `leading` 参数），以及事件结束后的那次回调（配置 `trailing` 参数）。需要特别注意的是，两者不能同时配置！

```js
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle = function(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    // 如果 options.leading === false，则每次触发回调后将 previous
    // 置为 0，否则置为当前时间戳
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    // 记录当前时间
    var now = Date.now();

    // 第一次执行回调并且设置第一个回调不是立即执行，则将 previous
    // 设置为当前时间戳，相当于表示刚刚执行过，这次不用执行
    if (!previous && options.leading === false) previous = now;

    // 距离下次执行需要等待的时间
    var remaining = wait - (now - previous);

    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      // 如果时间间隔到了（remaining <= 0 即 now - previous > wait）
      // 或者 remaining > wait 表示客户端系统时间被调整过，
      // 则触发执行方法
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // 如果已经存在定时器或者最后一次不需要触发则不会进入这个分支
      // 否则 setTimeout 定时 remaining 之后执行 later
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};
```

### throttle 应用场景

函数节流有哪些应用场景？哪些时候我们需要间隔一定时间触发回调来控制函数调用频率？

- DOM 元素的拖拽功能实现（mousemove）
- 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
- 计算鼠标移动的距离（mousemove）
- Canvas 模拟画板功能（mousemove）
- 搜索联想（keyup）
- 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次。

## 防抖 debounce

函数去抖就是对于一定时间段的连续的函数调用，只让其执行一次。

实现原理就是利用定时器，函数第一次执行时设定一个定时器，之后调用时发现已经设定过定时器就清空之前的定时器，并重新设定一个新的定时器，如果存在没有被清空的定时器，当定时器计时结束后触发函数执行。

```js
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}
```

这样就可以实现一个 `debounce` 了，但是如果想第一触发的时候就执行 `fn` 那就不行了，这里再改写一下：

```js
function debounce(fn, delay, immediate) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate && !timer) {
      fn.apply(this, args);
    }

    timer = setTimeout(() => {
      // 不影响下次立即触发
      // timer = null;
      fn.apply(this, args);
    }, delay)
  }
}
```

这里加上了一个判断处理，如果 `immediate` 为 `true`，并且是第一次执行防抖函数，则调用 `fn.apply(this, args);`。

### underscode 中 debounce 的实现

以下是源码

```js
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce = function(func, wait, immediate) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArguments(function(args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = _.delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

// 根据给定的毫秒 wait 延迟执行函数 func
_.delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});

var restArguments = function(func, startIndex) {
  // 不输入 startIndex 则自动取最后一个
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    // 只获取从 startIndex 开始的参数组成 rest
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    // 获取 startIndex 之前的参数
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    // 把 rest 放到 args[startIndex]
    args[startIndex] = rest;
    return func.apply(this, args);
  };
};
_.restArguments = restArguments;
```

这里的 `debounce` 还增加了几个功能：

- 定时器计时结束后清除 timeout，使之不影响下次连续事件的触发
- 新增了手动取消功能 cancel

### debounce 应用场景

函数去抖有哪些应用场景？哪些时候对于连续的事件响应我们只需要执行一次回调？

- 每次 resize/scroll 触发统计事件
- 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

## 参考

- [JavaScript 函数节流和函数去抖应用场景辨析](https://github.com/lessfish/underscore-analysis/issues/20)
- [underscore 函数节流的实现](https://github.com/lessfish/underscore-analysis/issues/22)
- [节流(throttle)函数的作用是什么？有哪些应用场景，请实现一个节流函数。](https://github.com/YvetteLau/Step-By-Step/issues/12)
- [防抖(Debounce) & 节流(Throttle)](https://juejin.im/post/5caf39d8f265da03826106b8)
