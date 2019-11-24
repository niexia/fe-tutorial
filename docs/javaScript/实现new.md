# 实现 new

我们知道使用 `new` 操作符，这种方式调用构造函数实际上会经历 4 个步骤：

1. 创建（或者说构造）一个全新的对象；
2. 这个新对象会被执行 `[[Prototype]]` 链接；
3. 这个新对象会被绑定到函数调用的 `this`；
4. 如果函数没有返回其他新对象，那么 `new` 表达式中的函数调用会自动返回这个新对象。

```js
function Foo(name, age) {
  this.name = name;
  this.age = age;
}
var bar = new Foo('Vue', 20);
console.log(bar); // {name: "Vue", age: 20}
```

按照这个过程实现一个 `new` 操作符：

```js
function myNew() {
  var obj = new Object(); // 创建一个新对象
  var Ctor = [].shift.call(arguments);
  obj.__proto__ = Ctor.prototype; // 执行 [[Prototype]] 链接
  var result = Ctor.apply(obj, arguments); // 绑定到函数调用的 this
  return result === 'object' ? result : obj; // 返回对象
}

var baz = myNew(Foo, 'Vue', 20);
console.log(baz); // {name: "Vue", age: 20}
```