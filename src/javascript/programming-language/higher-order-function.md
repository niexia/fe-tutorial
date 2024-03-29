# 高阶函数

高阶函数在 JavaScript 中广泛使用。 如果你已经用 JavaScript 编程了一段时间，你可能已经在不知不觉中用过它们了。

## 什么是高阶函数

**高阶函数需要至少满足下列条件中的一个**：

- 接受一个或者多个函数作为输入
- 输出一个函数

也就是说高阶函数是对其他函数进行操作的函数，操作可以是将它们作为参数，或者是返回它们。 简单来说，高阶函数是一个接收函数作为参数或将函数作为输出返回的函数。

## 函数作为参数传递

### 使用高阶函数

让我们看看一些内置高阶函数的例子，看看它与不使用高阶函数的方案对比如何。

- Array.prototype.map

`map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

假设现在有个数字数组，想创建一个新数组，其中它的每个元素时第一个数组的对应元素的 2 倍，现在看看解决这个问题

```js
// 不使用高阶函数
let arr1 = [1, 2, 3];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr.push(arr1[i] * 2)
}
console.log(arr2); // [2, 4, 6]

// 使用高阶函数 map
let arr1 = [1, 2, 3];
let arr2 = arr1.map(item => item * 2);
console.log(arr2); // [2, 4, 6]
```

- Array.prototype.filter

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

假设有一个包含分数的数组，现在想找到所有及格的分数。

```js
// 不使用高阶函数
let arr1 = [75, 34, 56, 78, 99, 77, 65, 88, 65, 96];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] >= 60) {
    arr2.push(arr1[i])
  }
}
console.log(arr2); // [75, 78, 99, 77, 65, 88, 65, 96]

// 使用高阶函数 filter
let arr1 = [75, 34, 56, 78, 99, 77, 65, 88, 65, 96];
let arr2 = arr1.filter(item => item >= 60);
console.log(arr2); // [75, 78, 99, 77, 65, 88, 65, 96]
```

**可以看到使用高阶函数使我们的代码更清晰简洁。**

### 创建自己的高阶函数

上面已经看到了内置的一些高阶函数，现在让我们创建自己的高阶函数。下面自己实现一个 `map` 方法。

```js
function map(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(
      fn(arr[i])
    )
  }
  return res;
}

let arr1 = [1, 2, 3];
let arr2 = map(arr1, item => item * 2);
console.log(arr2); // [2, 4, 6]
```

上面的例子中，创建了一个高阶函数 `map`，它接收一个数组和一个回调函数作为参数。遍历传入的数组，在每一次迭代中调用 `fn`，并将当前元素作为参数传给 `fn`，然后把 `fn` 的返回结果存储到 `res` 中。循环结束之后，将 `res` 返回。

## 函数作为返回值输出

这个很好理解，就是返回一个函数，类似的场景也很多。其实从闭包的例子就可以看到高阶函数。

- isType

```js
function isType(type) {
  return function(val) {
    return Object.prototype.toString.call(val) === `[object] ${type}`;
  }
}

const isArray = isType('Array');
const isString = isType('String');

isArray([1, 2]); // true
isString({}); // false
```

- 预置函数

它的实现原理也很简单，当达到条件时再执行回调函数

```js
function after(time, cb) {
  return function() {
    if (--time === 0) {
      cb();
    }
  }
}
// 举个栗子吧，吃饭的时候，我很能吃，吃了三碗才能吃饱
let eat = after(3, function() {
  console.log('吃饱了');
});
eat();
eat();
eat(); // 吃饱了
```

## 应用

### <a href="./function-curry" target="_blank" rel="noreferrer">柯里化</a>

### <a href="./throttle-debounce" target="_blank" rel="noreferrer">函数节流</a>

### 分时函数

节流函数为我们提供了一种限制函数被频繁调用的解决方案。

下面我们将遇到另外一个问题，某些函数是用户主动调用的，但是由于一些客观的原因，这些操作会严重的影响页面性能，此时我们需要采用另外的方式去解决。

如果我们需要在短时间内才页面中插入大量的 DOM 节点，那显然会让浏览器吃不消。可能会引起浏览器的假死，所以我们需要进行分时函数，分批插入。

```js
/**
* 分时函数
* @param {Array} list 创建节点需要的数据
* @param {Function} fn 创建节点逻辑函数
* @param {Number} count 每一批节点的数量
*/
const timeChunk = function(list, fn, count = 1){
  let timer = null;
  const start = function(){
    let len = Math.min(count, list.length)
    for (let i = 0; i < len; i++) {
      let item = list.shift()
      // 对执行函数逐个进行调用
      fn(item)
    }
  }
  return function(){
    timer = setInterval(() => {
      if (list.length === 0) {
        return window.clearInterval(timer)
      }
      // 一批一批的插入
      start()
    },200)
  }
}

// 分时函数测试
const arr = []
for (let i = 0; i < 94; i++) {
  arr.push(i)
}
const renderList = timeChunk(arr, function(data){
  let div =document.createElement('div');
  div.innerHTML = data + 1;
  document.body.appendChild(div);
}, 20)
renderList()
```

### 惰性载入函数

因为浏览器的之间的行为差异，多数的 JavaScript 代码包含了大量的 if 判断语句，将执行引导到正确的代码中。

例如一个事件的绑定函数

```js
function addEvent(el, type, handler) {
  if (window.addEventListener) {
    el.addEventListener(type, handler, false)
  } else {
    el.attachEvent(`on${type}`, handler)
  }
}
```

每次调用 `addEvent` 的时候，它都会对浏览器多支持的能力进行判断，即使每次调用时分支的结果都不会变：如果浏览器支持 `addEventListener` 或者 `attachEvent`，那它就一直支持了，那么这种判断就没有必要了。

即使只有一个 if 语句的代码，也肯定要比没有 if 语句的慢，所以如果 if 语句不必每次执行，那么代码就可以运行地更快一些。解决方案就是惰性载入的技巧。

**惰性载入**表示函数执行的分支仅发生一次。有两种方法可以实现惰性载入的方式：

1. 在函数被调用时在处理函数。第一次调用的时候，该函数被覆盖为一个按合适方式执行的函数，这样接下来对原函数的调用就不需要经过执行的分支了。

```js
function addEvent(el, type, handler) {
  if (window.addEventListener) {
    // 覆盖
    addEvent = function (el, type, handler) {
      el.addEventListener(type, handler, false)
    }
  } else {
    // 覆盖
    addEvent = function (el, type, handler) {
      el.attachEvent(`on${type}`, handler)
    }
  }
  addEvent(el, type, handler)
}
```

这个惰性载入，在 `if` 语句的每个分支都会对 `addEvent` 重新赋值，有效覆盖了原来的函数。最后一步是调用新赋值的函数。下一次调用 `addEvent()` 的时候，就会直接调用被分配的函数，而不需要进行判断。这样，在第一次调用时会损失一点性能。

2. 在声明函数时就指定适当的函数

```js
var addEvent = (function () {
  if (window.addEventListener) {
    return function (el, type, handler) {
      el.addEventListener(type, handler, false)
    }
  } else {
    return function (el, type, handler) {
      el.attachEvent(type, handler, false)
    }
  }
})()
```

通过创建一个自动执行函数，用以确定使用哪一个函数来实现。这样，在代码首次加载时会损失一点性能。

惰性载入的优点是只在执行分支代码时牺牲一点性能。至于那种方式更合适，就要看自己具体的需求了。这两种方式都可以避免执行不需要的代码。

## 参考

- [理解 JavaScript 中的高阶函数](https://juejin.im/post/5beaad2751882511a852723c)
- [高阶函数，你怎么那么漂亮呢！](https://juejin.im/post/5ad6b34a6fb9a028cc61bfb3)
- [JavaScript 高级程序设计（第3版）- 22.1.3 惰性载入函数](https://book.douban.com/subject/10546125/)