# this

`this` 是一种相对复杂的机制，那为什么要使用 `this` 呢？

## 为什么使用 this

看一段代码

```js
var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
}

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, " + identify.call(this);
  console.log(greeting);
}

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, KYLE
speak.call(you); // Hello, READER
```

这段代码可以在不同的上下文对象（`me` 和 `you`）中重复的使用函数 `identify()` 和 `speak()`。如果不使用 `this`，那就需要给 `identify()` 和 `speak()` 显式传入一个上下文对象。

```js
function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello, " + identify(context);
  console.log(greeting);
}

identify(me); // KYLE
speak(you); // Hello, READER
```

**相对于显式的传递，this 是一种更优雅的方式来隐式“传递”一个对象的引用，因此可以将 API 设计得更加简洁和易用。**

## this 的误解

`this` 的误解主要有两个：指向自身和指向作用域。

### 指向自身

this 并不像所想的那样指向函数本身：

```js
function foo(num) {
  console.log('foo: ' + num);
  this.count++; // 记录函数调用的次数
}
foo.count = 0;
for (var i = 1; i <= 3; i++) {
  foo(i);
}

// foo: 1
// foo: 2
// foo: 3

// foo 被调用了多少次
console.log(foo.count); // 0 -- 为什么？！
```

`foo` 被调用了 3 次，但是 `foo.count` 仍然等于 0。执行 `foo.count = 0` 给函数对象 `foo` 添加了一个属性 `count`。但是函数的内部代码 `this.count` 中的 `this` 并不是指向那个函数对象。

### 指向作用域

需要明确的是，**this 在任何情况下都不指向函数的词法作用域**。在 JavaScript 内部，作用域确实和对象很像，可见的标识符都是它的属性。但是作用域“对象”无法通过 JavaScript 代码来访问，它存在于 JavaScript 引擎内部。

看一段代码，它试图通过 `this` 来联通作用域：

```js
function foo() {
  var a = 2;
  this.bar()
}
function bar() {
  console.log(this.a);
}
foo(); // ReferenceError: a is not defined
```

这段代码错误不止一个，它非常完美（同时也令人伤感）地展示了 `this` 多么容易误导人。

它首先试图通过 `this.bar()` 来引用 `bar()` 函数（虽然成功了，但是纯属意外，可以看后面 `this` 的判断），此外还试图通过 `this` 联通 `foo()` 和 `bar()` 的词法作用域，从而可以访问 `a`。这是不可能实现的，使用 `this` 不可能在词法作用域查找到什么。

## this 是什么

**this 是在调用时绑定的，完全取决于函数的调用位置（也就是函数的调用方法）**。调用位置就是函数在代码中被调用的位置，而不是声明的位置。

那调用位置如何决定 `this` 的绑定对象呢？

### 绑定规则

正常函数有 4 中绑定规则。

#### 1. 默认绑定

独立函数调用，也就是直接使用不带任何修饰符的函数引用进行调用，只能使用**默认绑定**。非严格模式下，`this` 的默认绑定会绑定到全局对象，而在严格模式下，`this` 绑定到 `undefined`。


```js
// 运行在非严格模式下，this 会绑定全局对象
function foo() { 
  console.log( this.a );
}
var a = 2;
foo(); // 2

// 运行在严格模式下，this 会绑定到 undefined
function foo() { 
  "use strict";
  console.log( this.a );
}
var a = 2;
foo(); // TypeError: Cannot read property 'a' of undefined
```

还有一个微妙的细节，虽然 this 的绑定规则完全取决于调用位置，**但是只有运行在非 strict mode 下时，默认绑定才会绑定到全局对象，在严格模式的调用不影响默认绑定**。

```js
function foo() {
  console.log(this.a);
}
var a = 2;
(function () {
  "use strict";
  foo(); // 2
  console.log(this.a); // TypeError: Cannot read property 'a' of undefined
})();
```

#### 2. 隐式绑定

当函数引用有上下文对象时，**隐式绑定**规则会把函数中的 `this` 绑定到这个上下文对象。对象属性引用链中只有上一层或者说最后一层在调用中起作用。

```js
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};
obj.foo(); // 2

var obj2 = {
  a: 1,
  obj: obj
}
obj2.obj.foo(); // 2
```

一个常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是它应用了默认绑定，这就是**绑定丢失**。

```js
// 虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是foo函数本身
// bar() 是一个不带任何修饰的函数调用，应用默认绑定
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // 函数别名
var a = "oops, global"; // a 是全局对象的属性

bar(); // "oops, global"
```

#### 3. 显式绑定

通过 `call(..)` 或者 `apply(..)` 方法。它们的第一个参数是一个对象，是给 `this` 准备的，在调用函数时将这个对象绑定到 `this`。因为直接指定 `this` 的绑定对象，称之为**显示绑定**。

```js
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
};

// 调用 foo 时强制把 this 绑定到 obj
foo.call( obj ); // 2
```

- 硬绑定

创建函数 `bar()`，并在它的内部手动调用 `foo.call(obj)`，强制把 `foo` 的 `this` 绑定到了 `obj`。

```js
function foo() {
  console.log( this.a );
}
var obj = {
  a: 2
};
var bar = function() {
  foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2

// 硬绑定的 bar 不可能再修改它的 this
bar.call( window ); // 2
```

硬绑定的典型应用场景就是创建一个包裹函数，复杂就是参数并返回值：

```js
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}

var obj = {
    a: 2
};

var bar = function() {
  return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

另一个使用方法就是创建一个可以重复使用的辅助函数：

```js
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}

// 简单的辅助绑定函数
function bind(fn, obj) {
  return function() {
    return fn.apply( obj, arguments );
  }
}

var obj = {
    a: 2
};

var bar = bind( foo, obj );
var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

由于硬绑定是一种常用的模式，ES5 提供了内置方法 `Function.prototype.bind`，用法如下：

```js
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = foo.bind( obj );
var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

- API调用的“上下文”

第三方库的许多函数，以及 JavaScript 语言许多内置函数提供了一个可选参数，通常称之为“上下文”（context），其作用和 `bind(..)` 一样，确保回调函数使用指定的 `this`。这些函数实际上通过 `call(..)` 和 `apply(..)` 实现了显式绑定。

```js
function foo(el) {
	console.log( el, this.id );
}

var obj = {
    id: "awesome"
}

var myArray = [1, 2, 3]

// 调用 foo(..) 时把 this 绑定到 obj
myArray.forEach( foo, obj );
// 1 awesome 2 awesome 3 awesome
```

#### 4. new 绑定

JavaScript 有一个 `new` 操作符，但是和其它面向类的语言完全不同。

- 在 JavaScript 中，构造函数只是使用 `new` 操作符时被调用的普通函数，他们不属于某个类，也不会实例化一个类。
- 包括内置对象函数（比如 `Number(..)`）在内的所有函数都可以用new来调用，这种函数调用被称为构造函数调用。
- 实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。

使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作：

1. 创建（或者说构造）一个新对象。
2. 这个新对象会被执行 `[[Prototype]]` 连接。
3. 这个新对象会绑定到函数调用的 `this`。
4. 如果函数没有返回其他对象，那么 `new` 表达式中的函数调用会自动返回这个新对象。

```js
function foo(a) {
  this.a = a;
}

var bar = new foo(2); // bar和foo(..)调用中的this进行绑定
console.log( bar.a ); // 2
```

### 绑定规则的优先级

毫无疑问，默认绑定的优先级最低；然后是隐式绑定，接着是显示绑定，最高是 `new` 绑定。

### 判断 this

知道了优先级，就可以根据优先级来判断某个函数调用位置应用的是哪条规则了，可以按照下面的顺序判断：

1. 函数是否在 `new` 中调用（`new` 绑定）？如果是的话，`this` 绑定的是新创建的对象。例如 `var bar = new foo()`。
2. 函数是否通过 call、apply（显式绑定）？如果是的话，`this` 绑定的是指定的对象。例如 `var bar = foo.call(obj)`。
3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，`this` 绑定的是那个上下文对象。例如 `var bar = obj.foo()`。
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 `undefined`，否则绑定到全局对象。例如 `var bar = foo()`。

正常情况下，根据这些就可以判断了，但是有一些例外。

### 绑定例外

1. 被忽略的 this

把 `null` 或者 `undefined` 作为 `this` 的绑定对象传入 `call`、`apply` 或者 `bind`，这些值在调用时会被忽略，实际应用的是默认规则。


```js
function foo(a, b) {
  console.log(this.a)
}
var a = 2;
foo.call(null); // 2
```

那一般什么情况我们才会传入 `null` 呢？

```js
function foo(a, b) {
    console.log( "a:" + a + "，b:" + b );
}
// 1. 把数组展开成参数
foo.apply( null, [2, 3] ); // a:2，b:3

// 2. 使用 bind(..) 进行柯里化，预先设置一些参数
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2，b:3 
```

2. 间接引用

间接引用下，调用这个函数会应用默认绑定规则。间接引用最容易在赋值时发生。

```js
function foo() {
    console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4};

o.foo(); // 3

// p.foo = o.foo 的返回值是目标函数的引用
// 所以调用位置是 foo() 而不是 p.foo() 或者 o.foo()
(p.foo = o.foo)(); // 2
```

3. 软绑定

硬绑定可以把 `this` 强制绑定到指定的对象（`new` 除外），防止函数调用应用默认绑定规则。但是会**降低函数的灵活性**，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改 `this`。

如果给默认绑定指定一个全局对象和 `undefined` 以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显示绑定修改 `this` 的能力，这就是**软绑定**。

```js
if(!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    var fn = this;
    // 捕获所有curried参数
    var curried = [].slice.call( arguments, 1 ); 
    var bound = function() {
      return fn.apply(
        (!this || this === (window || global)) ? obj : this,
        curried.concat.apply( curried, arguments )
      );
    };
    bound.prototype = Object.create( fn.prototype );
    return bound;
  };
}
```

看看怎么使用它：

```js
function foo() {
  console.log("name:" + this.name);
}

var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind( obj );
fooOBJ(); // name: obj 

obj2.foo = foo.softBind( obj );
obj2.foo(); // name: obj2 <---- 看！！！

fooOBJ.call( obj3 ); // name: obj3 <---- 看！！！

setTimeout( obj2.foo, 10 ); // name: obj
```

### this 词法

ES6 新增一种特殊函数类型：**箭头函数**。**箭头函数不使用 this 的 4 种标准规则，而是根据外层（函数或者全局）作用域来决定 this。**

```js
function foo() {
  return (a) => {
    // this 继承自 foo()
    console.log( this.a );
  };
}

var obj1 = {
  a: 2
};
var obj2 = {
  a: 3
}

var bar = foo.call( obj1 );
bar.call( obj2 ); // 2，不是3！
```

`foo()` 内部创建箭头函数会**捕获**调用时 `foo()` 的 this，由于 `foo()` 的 `this` 绑定到 `obj1`，所以 `bar`（引用箭头函数）的 `this` 也会绑定到 `obj1`。**箭头函数的 this 绑定无法修改**，`new` 也不行。

箭头函数可以向 bind(...) 一样确保函数的 this 被绑定到指定对象。此外，它还有一个重要的作用是它用更常见的词法作用域取代了传统的 this 机制。实际上，在 ES6 之前就已经使用一种几乎和箭头函数完全一样的模式：

```js
function foo() {
  var self = this;
  setTimeout(function() {
    console.log( self.a );
  }, 100 );
}

var obj = {
  a: 2
};

foo.call(obj); // 2

// 使用箭头函数
function foo() {
  setTimeout(() => {
    // 这里的 this 在词法上继承自 foo()
    console.log( this.a );
  }, 100 );
}

var obj = {
  a: 2
};

foo.call(obj); // 2
```