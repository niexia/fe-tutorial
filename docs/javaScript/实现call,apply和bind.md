# call、apply 和 bind

这 3 个方法都是用于绑定函数执行的 `this`（上下文），当然 `bind` 会返回一个函数，而不是直接执行。

## call

[call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

该方法的语法和作用与 `apply()` 方法类似，只有一个区别，就是 `call()` 方法接受的是**一个参数列表**，而 `apply()` 方法接受的是**一个包含多个参数的数组**。

```js
function foo() {
  console.log(this.a)
}
var obj = {
  a: 1
};
foo.call(obj); // 1
```

`call()` 改变了 `this`，如果在调用 `call()` 的时候把函数添加到 `foo` 对象，那么就可以实现，看一例子：

```js
function foo() {
  console.log(this.a)
}
var obj = {
  a: 1,
  foo: foo
};
obj.foo(); // 1
```

知道这个原理，接下来实现一下：

```js
// ES3
Function.prototype.call = function (context) {
  context = context ? Object(context) : window; 
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}

// ES5
Function.prototype.call = function (context = window, ...args) {
  // Function.prototype.call() 直接调用
  if (this === Function.prototype) return undefined;

  // 把函数添加到 context 中，作为一个属性
  context.fn = this;
  let result = context.fn(...args);

  // 将添加的属性删除
  delete context.fn;
  return result;
}
```

## apply

`apply()` 方法调用一个具有给定 `this` 值的函数，以及作为一个数组（或类似数组对象）提供的参数。

```js
var numbers = [5, 6, 2, 3, 7];

// 应用 (apply) Math.min/Math.max 内置函数完成
var max = Math.max.apply(null, numbers); // 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..)
var min = Math.min.apply(null, numbers);

function foo() {
  console.log(this.a)
}
var obj = {
  a: 1
};
foo.apply(obj); // 1
```

接下来实现一下：

```js
// ES5
Function.prototype.apply = function (context = window, args) {
  // Function.prototype.apply() 直接调用
  if (this === Function.prototype) return undefined;
  
  context.fn = this;
  let result;

  // 判断参数是否是数组
  if (Array.isArray(args)) {
    result = context.fn(...args);
  } else {
    result = context.fn()
  }

  delete context.fn;
  return result;
}
```

## bind

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被 `bind` 的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

```js
function.bind(thisArg[,arg1[,arg2[, ...]]])
```

看一下一些使用的例子：

```js
// 创建绑定函数
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};
module.getX(); // 81
var retrieveX = module.getX;
retrieveX(); // 9
// 创建一个新函数，把 'this' 绑定到 module 对象
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

// 偏函数，使一个函数拥有预设的初始参数
function list() {
  return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3); // [1, 2, 3]
var leadingThirtysevenList = list.bind(null, 37);
var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // // [37, 1, 2, 3]
```

`bind` 具有以下特点：

- 可以指定 this
- 可以传入参数，预设值
- 返回的是一个函数

先实现一下：

```js
Function.prototype.bind = function bind(context) {
  let args = Array.prototype.slice.call(arguments, 1);
  let fn = this;
  return function () {
    let innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    // 绑定到给定环境
    return fn.apply(context, finalArgs);
  }
}
```

另外还有一个关键点，返回的函数同样也可以用 `new` 操作符调用：

> 一个绑定函数也能使用 `new` 操作符创建对象：这种行为就像把原函数当成构造器。提供的 `this` 值被忽略，同时调用时的参数被提供给模拟函数。

也就是说当 `bind` 返回的函数作为构造函数的时候，`bind` 时指定的 `this` 值会失效，但传入的参数依然生效。举个例子：

```js
var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
// undefined
// daisy
// 18

console.log(obj.habit); // shopping
console.log(obj.friend); // kevin
```

尽管在全局和 `foo` 中都声明了 `value` 值，最后依然返回了 `undefined`，说明绑定的 `this` 失效了，如果了解 `new` 的模拟实现，就会知道这个时候的 `this` 已经指向了 `obj`。

```js
function bind() {
  Function.prototype.bind = function (context) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(
            this instanceof fNOP ? this : context || window,
            aArgs.concat(Array.prototype.slice.call(arguments))
          );
        };
    // 原型式继承
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  };
}
```

## 参考

- [Function.prototype.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
- [JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)