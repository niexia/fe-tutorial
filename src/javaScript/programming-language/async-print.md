# 实现异步打印

指定时间之后输出一个值：

```js
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);
```

上面代码指定 50 毫秒以后，输出 `hello world`。通过这种方式就可以异步打印了：

```js
function timeout(ms, val) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(val);
    }, ms);
  });
}

async function asyncPrint(ms) {
  for (let i = 0; i < 5; i++) {
    let result = await timeout(ms, i);
    console.log(result);
  }
}
asyncPrint(1000)
// 0
// 1
// 2
// 3
// 4
```

这样就可以间隔 1s 打印一次了。

## 参考

- [async 函数](http://es6.ruanyifeng.com/#docs/async)