# 实现继承

在原型部分介绍到，属性访问的时候，如果在对象本身没有找到，就会继续到原型对象中查找。这就好像是对象“继承”了原型的属性。实际上，JavaScript继承是一个十分具有迷惑性的说法：

继承意味着复制操作，但是 JavaScript 默认并不会复制对象属性。相反，JavaScript 在两个对象之间创建关联，这样一个对象就可以通过**委托**访问另一个对象属性和函数。所以与其叫继承，委托的说法反而更加准确。

前面还说到，把原型关联起来组成的链状结构叫作原型链，通过这种关联就可以委托去访问另一个对象的属性和方法，也就是实现了“继承”。

## 原型链

```js
function SuperType(){
  this.property = true;
}
SuperType.prototype.getSuperValue = function(){
  return this.property;
}
function SubType(){
  this.subProperty = false;
}
// 原型对象 SubType.prototype 等于 SuperType 的实例
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
  return this.subProperty;
}
var instance = new SubType();
console.log(instance.getSuperValue()); // true
```

### 确定原型和实例的关系

使用原型链后, 我们怎么去判断原型和实例的这种继承关系呢？有 3 种方法：

- instanceof

```js
console.log(instance instanceof Object); //true
console.log(instance instanceof SuperType); //true
console.log(instance instanceof SubType); //true
```

- isPrototypeOf()

```js
console.log(Object.prototype.isPrototypeOf(instance)); //true
console.log(SuperType.prototype.isPrototypeOf(instance)); //true
console.log(SubType.prototype.isPrototypeOf(instance)); //true
```

- Object.getPrototypeOf()

```js
console.log(Object.getPrototypeOf(instance) == Object.prototype); //false
console.log(Object.getPrototypeOf(instance) == SuperType.prototype); //false
console.log(Object.getPrototypeOf(instance) == SubType.prototype); //true
```

### 原型链继承存在的问题

1. 创建实例时，不能向超类型的构造函数传参。

2. 使用原型链来继承的时候，原型实际上变成另一个类型的实例，所以这个实例的属性就变成了现在原型的属性了，**这些属性可以被现在的实例共享**。和创建对象时一样，如果这些原型属性包含引用类型值，那么就出现一个实例的属性修改会影响所有实例：

```js
function SuperType(){
  this.colors = ['red', 'blue', 'green'];
}
function SubType(){
  this.subProperty = false;
}
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // ['red', 'blue', 'green', 'black']

var instance2 = new SubType();
console.log(instance2.colors); // ['red', 'blue', 'green', 'black'] 也被改变了！
```

有鉴于此, 实践中很少会单独使用原型链。

## 借用构造函数

**即在子类型构造函数的内部调用超类型构造函数。**

```js
function SuperType() {
  this.colors = ['red', 'blue', 'green'];
}
function SubType(){
  // 继承 SuperType，可以在这里向超类传递参数
  SuperType.call(this)
}

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // ['red', 'blue', 'green', 'black']

var instance2 = new SubType();
console.log(instance2.colors); // ['red', 'blue', 'green']
```

### 借用构造函数可以解决的问题

借用构造函数，就可以解决原型链的两大问题：

1. 子类型创建时也能够给符类型传递参数了；
2. 在子类型构造函数的内部调用超类型构造函数，这样子类型的每个实例都有自己的属性副本。

### 借用构造函数存在的问题

1. 方法都在构造函数中定义，函数复用无从谈起；
2. 在超类型的原型中定义的方法，对子类型是不可见，结果所有类型都只能使用构造函数模式。

考虑到这些问题，借用构造函数的技术也很少使用。

## 组合继承

组合继承，有时候也叫做伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而发挥两者之长的一种继承模式。

**基本思路: 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承**。这样，既通过在原型上定义方法实现了函数复用，有能够保证每个实例都有自己的属性。

```js
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
}
function SubType(name, age){
  SuperType.call(this) // 继承属性
  this.age = age
}
SubType.prototype = new SuperType(); // 继承原型
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
  console.log(this.age);
}

var instance1 = new SubType('Nicholas', 29);
instance1.colors.push('black');
console.log(instance1.colors); // ['red', 'blue', 'green', 'black']
instance1.sayName(); // Nicholas
instance1.sayAge(); // 29

var instance1 = new SubType('Grey', 29);
console.log(instance1.colors); // ['red', 'blue', 'green']
instance1.sayName(); // Grey
instance1.sayAge(); // 27
```

组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点。成为 JavaScript 最常用的继承模式。而且，`instanceof` 和 `isPrototypeOf()` 也能够用于识别基于组合继承创建的对象。

但是，可以看到调用了两次超类的构造函数，造成了不必要的浪费，那怎么避免呢？后面会介绍

## 原型式继承

道格拉斯·克罗克福德于 2006 年在一篇题为 《Prototypal Inheritance in JavaScript》（JavaScript 中的原型式继承）。在这篇文章中它介绍了一种实现继承的方法，这种方法并没有使用严格意义上的构造函数。

他的想法是，借助原型可以基于已有的对象创建一个新对象，同时还不必因此创建自定义类型。为了达到这个目的，他给出了如下函数：

```js
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
```

**在 `object()` 内部，先创建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后，返回了整个临时类型的一个新实例**。

从本质上讲，`object()` 对传入的对象执行了一次浅复制，来看下面的例子：

```js
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = object(person);
another.name = 'Grey';
anther.friends.push('Rob');

var yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');

console.log(person.friends); // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']
```

这种原型继式继承，要求必须有一个对象可以作为另一个对象的基础，把它传递给 `object()` 函数。

上面例子中，把这个 `person` 传入到 `object()` 函数中，这个函数会返回一个新对象。整个新对象将 `person` 作为原型，所以它的原型包含一个基本类型属性和一个引用类型值属性。这些属性可以被所有新对象共享。也就是说 `person.friends` 不仅属于 `person` 所有，而且也会被 `anotherPerson` 和 `yetAnotherPerson` 共享。

ES5 中，通过新增 **`object.create()`** 方法规范化了上面的原型式继承。

这个方法接收 2 个参数：

- 一个用作新对象原型的对象。
- 一个为新对象定义额外属性的对象（可选的）。

```js
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = Object.create(person);
another.name = 'Grey';
anther.friends.push('Rob');

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');

console.log(person.friends); // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']
```

`Object.create()` 的第二个参数格式与 `Object.defineProperties()` 方法的第二个参数参数格式相同，以这种方式定义的任何属性都会覆盖原型对象上的同名属性，例如：

```js
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = Object.create(person, {
	name : {
		value : "Grey"
	}
});
console.log(anotherPerson.name); // Grey
```

在没有必要创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，使用原型继承就可以了。

不过包含引用类型值的属性始终都会共享相应的值，**就和使用原型模式一样**。

## 寄生式继承

寄生式继承是与原型式继承紧密相关的一种思路，同样是克罗克福德推而广之的。

寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真的是它做了所有工作一样返回对象。如下：

```js
function createAnother(original){
	var clone = object(original); // 通过调用 object 函数创建一个新对象
	clone.sayHi = function () { // 以某种方式来增强这个对象
		alert("hi");
	};
	return clone; // 返回这个对象
}
```

这个例子中的代码基于 `person` 返回了一个新对象——`anotherPerson`. 新对象不仅具有 `person` 的所有属性和方法, 而且还被增强了, 拥有了 `sayHi()` 方法。

在主要考虑对象而不是自定类型和构造函数的情况下，寄生寄生也是一种有用的模式。

使用寄生式继承来为对象添加函数，由于不能做到函数复用而降低效率；这一点和构造函数模式类似。

## 寄生组合式继承

前面讲过，组合继承是 JavaScript 最常用的继承模式; 不过，它也有自己的不足。组合继承最大的问题就是无论什么情况下，**都会调用两次父类构造函数**：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。没错，子类型最终会包含超类型对象的全部实例属性，但我们不得不在调用子类型构造函数时重写这些属性。

所以会有两组属性，一组在实例上，一组在原型上。实例上的属性会屏蔽原型上的同名属性。

寄生组合式继承背后的思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们需要的不过是**超类型原型的一个副本**。本质上，就是使用寄生式继承类继承超类型的原型，然后再将结果指定给子类型的原型。

寄生组合式继承的基本模式如下：

```js
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
```

这个示例中的 `inheritPrototype()` 函数实现了寄生组合式继承的最简单形式。

```js
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
}
function SubType(name, age){
  SuperType.call(this) // 继承属性
  this.age = age
}

inheritPrototype(SubType, SuperType); // !!!

SubType.prototype.sayAge = function() {
  console.log(this.age);
}
```

这种方式的高效率体现在：只调用了一次 `SubType` 构造函数，并且因此避免了在 `SubType.prototype` 创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此还能正常使用 `instanceof` 和 `isPrototypeOf()` 方法。

**这就是最理想的继承方式**，可以写得更直观一些：

```js
//还可以这样写
function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  console.log(this.name);
}
function SubType(name, age){
  SuperType.call(this, name);
  this.age = age;
}
SubType.prototype = Object.create(SuperType.prototype); // 不是 new SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
  console.log(this.name);
}
var instance = new SubType("Curry", 30);
console.log(instance.sayName()); // "Curry"
console.log(instance instanceof SuperType); // true
console.log(instance instanceof SubType); // true
```