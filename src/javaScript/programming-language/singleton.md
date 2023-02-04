# 单例模式

```js
// 单例模式
function SingLeton(name) {
  this.name = name;
}
SingLeton.prototype.getName = function() {
  console.log(this.name);
}
SingLeton.prototype.getInstance = (function() {
  var instance;
  return function(name) {
    if (!instance) {
      instance = new SingLeton(name);
    }
    return instance;
  }
})();

var a = SingLeton.getInstance(1);
var b =SingLeton.getInstance(2);
console.log(a === b);


// 或者
function S(html) {
  this.html = html;
  this.init();
}
S.prototype.init = function() {
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
}

var Singleton = (function() {
  var instance;
  return function(html) {
    if (!instance) {
      instance = new S(html);
    }
    return instance;
  }
})()

var a = new Singleton('test1');
var b = new Singleton('test2');
console.log(a === b)
```