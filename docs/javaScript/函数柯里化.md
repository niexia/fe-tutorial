# 函数柯里化

函数柯里化又叫部分求值。**函数柯里化（function currying）用于创建已经设置好了一个或多个参数的函数**。函数柯里化的基本方法和函数绑定 `bind()` 是一样的：使用一个闭包返回一个函数。两者的区别是，当函数调用时，返回的函数还需要设置一些传入的参数。

## 创建柯里化函数

柯里化函数通常由以下步骤动态的创建：调用另一个函数**并为它传入要柯里化的函数和必要的参数**。下面是创建柯里化函数的通用方式：

```js
function curry(fn) {
  // 获取第一参数之后的所有参数
  let args = Array.prototype.slice.call(arguments, 1);
  return function () {
    // 存放内部函数的所有传入参数
    let innerArgs = Array.prototype.slice.call(arguments);
    // 将外部函数和内部函数的参数组合
    var finalArgs = args.concat(innerArgs);
    // 记得 return！
    return fn.apply(null, finalArgs);
  }
}
```

`curry()` 的第一参数是要进行柯里化的函数，其他参数是要传入的值。这个柯里化函数没有考虑执行环境，所以调用 `apply()` 时第一个参数是 `null`。简单的进行应用一下：

```js
function add(num1, num2) {
  return num1 + num2;
}
var curriedAdd = curry(add, 1);
curriedAdd(2); // 3
```

函数柯里化还常常作为函数绑定的一部分包含在其中，可以构造出更为复杂的 `bind()` 函数。

```js
// 简单的 bind 函数
function bind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  }
}

// 结合函数柯里化的 bind 函数
function bind(fn, context) {
  // 注意从 2 开始
  let args = Array.prototype.slice.call(arguments, 2);
  return function () {
    let innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    // 绑定到给定环境
    return fn.apply(context, finalArgs);
  }
}
```

## 应用

### 延迟计算

判断当前函数传入的参数是否大于或等于 `fn` 需要参数的数量，如果是，直接执行 `fn` ，如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回 `currying` 函数。

```js
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return function (...args2) {
      return curry(fn, ...args, ...args2);
    }
  }
}

function fun(a, b, c) {
  return a + b + c;
}
const curriedFun = curry(fun)
curriedFun(1)(2)(3);  // 6
curriedFun(1, 2)(3);  // 6
curriedFun(1, 2, 3);  // 6
```

看一道面试题，如何实现 `multi(2)(3)(4) = 24` ？

```js
function curry(fn, ...args1) {
  return function (...args2) {
    var all = args1.concat(args2);
    if (all.length < fn.length) {
      return curry(fn, ...all);
    } else {
      return fn(...all);
    }
  }
}
function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);
multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);
```

那又实现 `sum(1)(2)(3)() = 6`，`sum(1)(2)(3)(4)() = 10`？

```js
function add(...args) {
  return args.reduce((pre, cur) => pre + cur);
}
function curry(fn, ...args1) {
  return function (...args2) {
    var all = args1.concat(args2);
    if (args2.length === 0) {
      return fn(...all);
    } else {
      return curry(fn, ...all)
    }
  }
}
var sum = curry(add);
sum(1)(2)(3)(); // 6
sum(1)(2)(3)(4)(); // 10
```

### 参数复用

```js
function getUrl(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}

var page1 = getUrl('http', 'www.conardli.top', 'page1.html');
var page2 = getUrl('http', 'www.conardli.top', 'page2.html');
```

我们使用`currying`来简化它：

```js
let conardliSite = currying(getUrl)('http', 'www.conardli.top');
let page1 = conardliSite('page1.html');    
```

## 参考

- [从一道面试题认识函数柯里化](https://juejin.im/post/5b8350246fb9a019c372d26d)
- [JavaScript 高级程序设计（第3版）- 22.1.5 函数柯里化](https://book.douban.com/subject/10546125/)