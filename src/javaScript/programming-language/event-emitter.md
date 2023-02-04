# EventEmitter

观察者模式（observer）广泛的应用于 javascript 语言中，浏览器事件（如鼠标单击 click，键盘事件 keyDown）都是该模式的例子，看一下在 Node.js 的 `events` 模块中的应用。

## Node 的 events 模块

Node.js 的 events 模块只提供了一个对象：`events.EventEmitter`。`EventEmitter` 的核心就是事件触发与事件监听器功能的封装。

### API

看一下一些常用的 api。

- [emitter.on(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_on_eventname_listener)：添加 listener 函数到名为 eventName 的事件的监听器数组的末尾。 不会检查 listener 是否已被添加。 多次调用并传入相同的 eventName 与 listener 会导致 listener 会被添加多次。
- [emitter.once(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_once_eventname_listener)：添加单次监听器 listener 到名为 eventName 的事件。 当 eventName 事件下次触发时，监听器会先被移除，然后再调用。
- [emitter.off(eventName, listener)](http://nodejs.cn/api/events.html#events_emitter_off_eventname_listener)：从名为 eventName 的事件的监听器数组中移除指定的 listener。
- [emitter.emit(eventName[, ...args])](http://nodejs.cn/api/events.html#events_emitter_emit_eventname_args)：按照监听器注册的顺序，同步地调用每个注册到名为 eventName 的事件的监听器，并传入提供的参数。

### 基本使用

基本使用如下：

```js
const myEmitter = new EventEmitter();

const callbackA = () => console.log('a');
const callbackB = () => console.log('b');

myEmitter.on('foo', callbackA);
myEmitter.once('foo', callbackB);
myEmitter.off('foo', callbackA);
myEmitter.emit('foo', 1, 2);
```

### 实现一个 EventEmitter

```js
function EventEmitter() {
  this._events = {};
  this._maxListeners = 10;
}

/** 
 * 添加事件监听器
 * @param {String} type 类型
 * @param {Function} listener 监听器
 * @param {Boolean} prepend 是否在头部添加
*/
EventEmitter.prototype.on = function (type, listener, prepend) {
  if (!this._events) this._events = Object.create(null);

  if (this._events[type]) {
    if (prepend) {
      this._events[type].unshift(listener);
    } else {
      this._events[type].push(listener);
    }
  } else {
    this._events[type] = [listener];
  }
}

/** 
 * 添加单次事件监听器
 * @param {String} type 类型
 * @param {Function} listener 监听器
*/
EventEmitter.prototype.once = function (type, listener) {
  let _this = this;
  
  // 中间函数，在调用完之后立即删除订阅
  function only(...args) {
    listener.apply(this, args);
    _this.off(type, listener);
  }
  // origin 保存原回调的引用，用于 remove 时的判断
  only.origin = listener;
  this.on(type, only);
}

/** 
 * 移除事件监听器
 * @param {String} type 类型
 * @param {Function} listener 监听器
*/
EventEmitter.prototype.off = function (type, listener) {
  if (this._events[type]) {
    // 使用过滤，移除退订的方法
    this._events[type] = this._events[type].filter(function (fn) {
      return fn !== listener && fn.origin !== listener
    })
  }
}

/** 
 * 调用事件监听器
 * @param {String} type 类型
 * @param {Function} listener 监听器
*/
EventEmitter.prototype.emit = function (type, ...args) {
  if (Array.isArray(this._events[type])) {
    this._events[type].forEach(fn => {
      fn.apply(this, args);
    });
  }
}

EventEmitter.prototype.prependListener = function (type, listener) {
  this.on(type, listener, true);
};

EventEmitter.prototype.setMaxListeners = function (count) {
  this._maxListeners = count;
};

// 测试
var emitter = new EventEmitter();

var listener1 = function (args) {
  console.log('listener1: ', args);
}
var listener2 = function (args) {
  console.log('listener2: ', args);
}
var listenerOnce = function (args) {
  console.log('listenerOnce: ', args);
}

emitter.on('click', listener1);
emitter.on('click', listener2);
emitter.once('click', listenerOnce);

emitter.emit('click', 1);
emitter.off('click', listener2);

emitter.emit('click', 1);
```

### Event

JavaScript 的 `Event()` 和上面的及其相似，`Event()` 构造函数, 创建一个新的事件对象 `Event`：

```js
// 创建一个支持冒泡且不能被取消的look事件
var ev = new Event("look", {"bubbles":true, "cancelable":false});

window.addEventListener('look', function (event) {
  console.log('event: ', event);
});
document.dispatchEvent(ev);

// 事件可以在任何元素触发，不仅仅是document
myDiv.dispatchEvent(ev);
```

## 参考

- [从观察者模式到手写EventEmitter源码](https://juejin.im/post/5b987d92e51d450e51625080)
- [观察者模式](http://www.conardli.top/docs/JavaScript/EventEmitter.html#观察者模式)
- [event - 事件触发器](http://nodejs.cn/api/events.html)