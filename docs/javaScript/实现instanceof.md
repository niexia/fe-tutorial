# 实现 instanceof

`instanceof` 用于判断构造函数的 `prototype` 属性是否出现在一个对象的原型链中。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);
console.log(auto instanceof Car); // true
console.log(auto instanceof Object); // true
```
## instanceof

```js
/**
 * instanceof
 *
 * @param {Object} obj 需要判断的对象.
 * @param {Function} ctor 构造函数.
 * @returns {Boolean} 返回判断结果.
 */
function instanceof(obj, ctor) {
  var proto = obj.__proto__;
  var prototype = ctor.prototype;
  while (true) {
    if (proto == null) return false;
    if (proto == prototype) return true;
    proto = proto.__proto__;
  }
}
```

## 参考

- [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [instanceof原理](https://juejin.im/post/5b7f64be51882542c83476f0)