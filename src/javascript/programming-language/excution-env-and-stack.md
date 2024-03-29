# 执行环境和执行栈

理解执行环境（也叫执行上下文）有助于我们理解其他 JS 的概念，例如提升机制、作用域和闭包等。

## 执行环境

执行环境（也叫执行上下文）是 JS 中最为重要的一个概念。执行环境定义了变量，或者是函数有权访问的其他数据，决定了它们各自的行为。每个执行环境有一个与之关联的**变量对象**（variable object），执行环境中定义的变量和函数都保存在这个对象中。虽然我们在代码里无法直接访问，但是解析器在处理数据的时候会使用它。

当某个执行环境中所有代码执行完毕之后，该上下文就会被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退出，例如关闭网页或浏览器，才会销毁）。

### 执行环境类型

执行环境有三种类型：

1. 全局执行环境

这是默认的，也是最基础的执行环境，也是最外围的一个执行环境。不同的宿主环境中，表示执行环境的对象也不一样，在 Web 浏览器对应的是 `window` 对象。

2. 函数执行环境

每个函数都有自己的执行环境。当调用执行一个函数时，就会为该函数创建一个执行环境，然后推入一个**栈**中。而在执行之后，栈将其上下文弹出，把控制权返回给之前的执行环境。一个程序可以存在任意数量的函数执行环境。

3. Eval 函数执行环境

运行在 `eval` 函数中的代码也获得自己的执行环境，`eval` 并不常用，它会影响执行效率。

## 执行栈

执行栈，也叫调用栈，用于存储代码执行期间创建的所有执行环境。

当 JavaScript 引擎首次读取你的脚本时，它会创建一个全局执行环境并将其推入当前的执行栈。每当发生一个函数调用，引擎都会为该函数创建一个新的执行环境并将其推到当前执行栈的顶端。

引擎会运行执行环境在执行栈顶端的函数，当此函数运行完成后，其对应的执行环境将会从执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行环境。

看一个样例：

```js
let a = 'Hello World!';

function first() {  
  console.log('Inside first function');  
  second();  
  console.log('Again inside first function');  
}

function second() {  
  console.log('Inside second function');  
}

first();  
console.log('Inside Global Execution Context');

```

![call-stack](../../public/assets/javascript-callStack.png)

当上述代码在浏览器中加载时，JavaScript 引擎会创建一个全局执行环境并且将它推入当前的执行栈。当调用 `first()` 函数时，JavaScript 引擎为该函数创建了一个新的执行环境并将其推到当前执行栈的顶端。

当在 `first()` 函数中调用 `second()` 函数时，Javascript 引擎为该函数创建了一个新的执行环境并将其推到当前执行栈的顶端。当 `second()` 函数执行完成后，它的执行环境从当前执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行环境，即 `first()` 函数的执行环境。

当 `first()` 函数执行完成后，它的执行环境从当前执行栈中弹出，上下文控制权将移到全局执行环境。一旦所有代码执行完毕，Javascript 引擎把全局执行环境从执行栈中移除。

## 创建执行环境

到目前为止，已经知道 JavaScript 是如何管理执行环境的了，接下来看一下 JavaScript 是如何创建执行环境的。

执行环境分两个阶段：**创建阶段**和**执行阶段**。

### 创建阶段

代码没有执行前都属于这个阶段，在这个阶段总共发生了三件事：

1. 确定 `this`，也称为 `this` 绑定。
2. 词法环境（LexicalEnvironment）组件被创建。
3. 变量环境（VariableEnvironment）组件被创建。

因此，执行环境在概念上可以表示为：

```
ExecutionContext = {  
  ThisBinding = <this value>,  
  LexicalEnvironment = { ... },  
  VariableEnvironment = { ... },  
}
```

#### this 绑定

在全局环境中，`this` 指向全局对象，即 `window` 对象。在函数中，`this` 只有执行的时候才能确定，取决于函数的调用方式。

#### 词法环境（Lexical Environment）

ES6 文档将词法环境定义为

> 词法环境是一种规范类型，基于 ECMAScript 代码的词法嵌套结构来定义标识符与特定变量和函数的关联关系。词法环境由环境记录（environment record）和可能为空引用（null）的外部词法环境组成。

也就是说词法环境由两个部分组成：**环境记录**和**对外环境的引用**。

1. 环境记录：存储变量和函数声明的实际位置。
2. 对外部环境的引用：可以访问的外部词法环境。

词法环境有两种类型：

1. 全局环境：没有外部环境引用的词法环境。它在全局环境中，外部引用环境引用为 `null`，它拥有一个全局对象（window 对象）及其关联的方法和属性，以及任何用户自定义的全局变量。
2. 函数环境：用户在函数中定义的变量存储在环境记录中，外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境。

对于函数环境而言，**环境记录还包含一个 `arguments` 对象**，该对象包含了索引和传递给函数参数之间的映射以及传递给函数参数的长度（数量）。

例如：

```js
function foo(a, b) {
  var c = a + b;
}
foo(2,3)

// arguments 对象
Arguments: {0: 2, 1: 3, length: 2}
```

词法环境的环境记录也有两种：

1. 声明性环境记录：存储变量、函数和参数。**一个函数环境包含声明性环境记录**。
2. 对象环境记录：用于定义在全局执行上下文中出现的变量和函数的关联。**全局环境包含对象环境记录**。

抽象地说，词法环境在伪代码中开起来像这样：

```js
// 全局环境
GlobalExectionContext = {  
  LexicalEnvironment: {   // 词法环境
    EnvironmentRecord: {  // 环境记录
      Type: "Object",     // 对象环境记录
      // 标识符绑定在这里 
    outer: <null>         // 对外环境的引用
  }  
}

// 函数环境
FunctionExectionContext = {  
  LexicalEnvironment: {    // 词法环境
    EnvironmentRecord: {   // 环境记录
      Type: "Declarative", // 声明性环境记录
      // 标识符绑定在这里 
    outer: <Global or outer function environment reference> // 对外环境的引用 
  }  
}
```

### 变量环境

变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性。

变量环境的环境记录包含了由 VariableStatements 在此执行上下文创建的绑定。在 ES6 中，LexicalEnvironment 组件和 VariableEnvironment 组件的**区别**在于前者用于存储函数声明和变量（`let` 和 `const`）绑定，而后者仅用于存储变量（`var`）绑定。

让我们结合一些代码示例来理解上述概念：

```js
let a = 20;  
const b = 30;  
var c;

function multiply(e, f) {  
 var g = 20;  
 return e * f * g;  
}

c = multiply(20, 30);
```

这段代码的执行环境如下：

```js
// 全局执行环境
GlobalExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {  
    EnvironmentRecord: {  
      Type: "Object",  
      // 标识符绑定在这里  
      a: < uninitialized >,  
      b: < uninitialized >,  
      multiply: < func >  
    }  
    outer: <null>  
  },

  VariableEnvironment: {  
    EnvironmentRecord: {  
      Type: "Object",  
      // 标识符绑定在这里  
      c: undefined,  
    }  
    outer: <null>  
  }  
}

// 函数执行环境
FunctionExectionContext = {  
   
  ThisBinding: <Global Object>,

  LexicalEnvironment: {  
    EnvironmentRecord: {  
      Type: "Declarative",  
      // 标识符绑定在这里  
      Arguments: {0: 20, 1: 30, length: 2},  
    },  
    outer: <GlobalLexicalEnvironment>  
  },

  VariableEnvironment: {  
    EnvironmentRecord: {  
      Type: "Declarative",  
      // 标识符绑定在这里  
      g: undefined  
    },  
    outer: <GlobalLexicalEnvironment>  
  }  
}
```

只有在遇到函数 `multiply` 的调用时才会创建函数执行上下文。

你可能已经注意到了 `let` 和 `const` 定义的变量没有任何与之关联的值，但 `var` 定义的变量设置为 undefined。

这是因为在创建阶段，代码会被扫描并解析变量和函数声明，其中函数声明存储在环境中，而变量会被设置为 `undefined`（在 `var` 的情况下）或保持未初始化（在 `let` 和 `const` 的情况下）。

这就是为什么你可以在声明之前访问 `var` 定义的变量（尽管是 `undefined` ），但如果在声明之前访问 `let` 和 `const` 定义的变量就会提示引用错误的原因。

这就是我们所谓的变量提升。

### 执行阶段

这是整篇文章中最简单的部分。在此阶段，完成对所有变量的分配，最后执行代码。

**注意**：在执行阶段，如果 Javascript 引擎在源代码中声明的实际位置找不到 let 变量的值，那么将为其分配 `undefined` 值。

## 参考

- [JavaScript 高级程序设计（第3版）](https://book.douban.com/subject/10546125/)
- [【译】理解 Javascript 执行上下文和执行栈](https://juejin.im/post/5bdfd3e151882516c6432c32)