# Event Loop

JS 执行是单线程的，这也意味着，javascript代码在执行的任何时候，都只有一个主线程来处理所有的任务。而这种机制基于事件循环来实现的。

## 浏览器的 EventLoop

### 任务队列

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候CPU是闲着的，因为 IO 设备（输入输出设备）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。

JavaScrip t语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去。

于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）

1. 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）
2. 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
4. 主线程不断重复上面的第三步。

下图就是主线程和任务队列的示意图：

![Task Queue](../../.vuepress/public/images/javascript-browser-EventLoop-taskQueue.jpg)

### 事件和回调函数

"任务队列"是一个事件的队列（也可以理解成消息的队列），IO 设备完成一项任务，**就在"任务队列"中添加一个事件，表示相关的异步任务可以进入"执行栈"了**。主线程读取"任务队列"，就是读取里面有哪些事件。

"任务队列"中的事件，除了 IO 设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。

所谓"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。

"任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。但是，由于存在"定时器"功能，可以放置定时事件，就是 `setTimeout` 和 `setInterval`，主线程首先要检查一下执行时间，只有到了规定的时间，才能返回主线程。

### Event Loop

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。

为了更好地理解Event Loop，请看下图（转引自Philip Roberts的演讲《Help, I'm stuck in an event-loop》）。

![EventLoop](../../.vuepress/public/images/javascript-browser-EventLoop.jpg)

上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。

值得注意的是，任务队列的所有任务并不是怪怪排队的。

### 宏任务与微任务

异步任务也存在优先级，把异步任务分为两类：**微任务**（micro task）和**宏任务**（macro task）。常见的有：

- Task(macroTask): setTimeout, setInterval, setImmediate, I/O, UI rendering。
- microTask: Promise, process.nextTick, Object.observe, MutationObserver。

针对这两种任务类型，任务队列实际上也对应有微任务队列和宏任务队列。当主线程执行栈为空时，主线程先查看微任务队列是否有事件存在：

1. 如果有事件存在，**会依次执行队列中事件对应的回调，直到微任务队列为空**。然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈。
2. 如果事件不存在，则再去宏任务队列中取出一个事件并把对应的回到加入当前执行栈。

需要记住**当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行**。

### 看一道题目

```js
console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});

console.log('script end');
```

输出的顺序是：

```js
script start
script end
promise1
promise2
setTimeout
```

因为 `Promise` 是微任务，执行会优先于 `setTimeout`。

### 结合前面的线程再看看

在整个循环中，需要这些线程：

1. JS 引擎线程：主线程，执行任务。
2. 事件触发线程：事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。
3. 定时触发器线程：定时计数器并不是由 JavaScript 引擎计数的，因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确。所以通过定时触发器线程来触发定时并计时，计时完毕后，添加到事件队列中，等待JS引擎空闲后执行。

## Node 环境的 EventLoop

在 node 中，事件循环表现出的状态与浏览器中大致相同。不同的是node中有一套自己的模型。node 中事件循环的实现是依靠的 libuv 引擎。我们知道 node 选择 chrome v8 引擎作为 js 解释器，v8 引擎将 js 代码分析后去调用对应的node api，而这些api最后则由 libuv 引擎驱动，执行对应的任务，并把不同的事件放在不同的队列中等待主线程执行。 因此实际上 node 中的事件循环存在于 libuv 引擎中。

### 事件循环模型

下面是一个libuv引擎中的事件循环的模型:

```
 ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<──connections───     │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

注：模型中的每一个方块代表事件循环的一个阶段。

### 事件循环各阶段详解

从上面这个模型中，我们可以大致分析出 node 中的事件循环的顺序：

外部输入数据 --> 轮询阶段(poll) --> 检查阶段(check) --> 关闭事件回调阶段(close callback) --> 定时器检测阶段(timer) --> I/O事件回调阶段(I/O callbacks) --> 闲置阶段(idle, prepare) --> 轮询阶段。

如此循环。

这些阶段大致的功能如下：

- timers: 这个阶段执行定时器队列中的回调如 `setTimeout()` 和 `setInterval()`。
- I/O callbacks: 这个阶段执行几乎所有的回调。但是不包括 close 事件，定时器和 `setImmediate()` 的回调。
- idle, prepare: 这个阶段仅在内部使用，可以不必理会。
- poll: 等待新的 I/O 事件，node 在一些特殊情况下会阻塞在这里。
- check: `setImmediate()` 的回调会在这个阶段执行。
- close callbacks: 例如 `socket.on('close', ...)` 这种 close 事件的回调。

下面我们来按照代码第一次进入 libuv 引擎后的顺序来详细解说这些阶段：

1. poll阶段

当个 v8 引擎将 js 代码解析后传入 libuv 引擎后，循环首先进入 poll 阶段。poll 阶段的执行逻辑如下：

先查看 poll queue 中是否有事件，有任务就按先进先出的顺序依次执行回调。 当 queue 为空时，会检查是否有 `setImmediate()` 的 `callback`，如果有就进入 check 阶段执行这些 `callback`。但同时也会检查是否有到期的timer，如果有，就把这些到期的 timer 的 `callback` 按照调用顺序放到timer queue 中，之后循环会进入 timer 阶段执行 queue 中的 `callback`。 **这两者的顺序是不固定的**，受到代码运行的环境的影响。如果两者的 queue 都是空的，那么 loop 会在 poll 阶段停留，直到有一个 i/o 事件返回，循环会进入 i/o callback 阶段并立即执行这个事件的 `callback`。

值得注意的是，poll 阶段在执行 poll queue 中的回调时实际上不会无限的执行下去。有两种情况poll阶段会终止执行 poll queue 中的下一个回调：所有回调执行完毕或者执行数超过了 node 的限制。

2. check 阶段

check 阶段专门用来执行 `setImmediate()` 方法的回调，当 poll 阶段进入空闲状态，并且 setImmediate queue 中有 `callback` 时，事件循环进入这个阶段。

3. close 阶段

当一个 socket 连接或者一个 handle 被突然关闭时（例如调用了`socket.destroy()` 方法），close 事件会被发送到这个阶段执行回调。否则事件会用 `process.nextTick()`方法发送出去。

4. timer 阶段

这个阶段以先进先出的方式执行所有到期的 timer 加入 timer 队列里的 `callback`，一个 timer callback 指得是一个通过 `setTimeout` 或者 `setInterval` 函数设置的回调函数。

5. I/O callback 阶段

如上文所言，这个阶段主要执行大部分 I/O 事件的回调，包括一些为操作系统执行的回调。例如一个 TCP 连接生错误时，系统需要执行回调来获得这个错误的报告。

### 几个常用的推迟任务方法

在node中有三个常用的用来推迟任务执行的方法：`process.nextTick`，`setTimeout`（`setInterval` 与之相同）与 `setImmediate`。

1. process.nextTick

尽管没有提及，但是实际上 node 中存在着一个特殊的队列，即 nextTick queue。

这个队列中的回调执行虽然没有被表示为一个阶段，**但是这些事件却会在每一个阶段执行完毕准备进入下一个阶段时优先执行**。当事件循环准备进入下一个阶段之前，会先检查 nextTick queue 中是否有任务，如果有，那么会先清空这个队列。

与执行 poll queue 中的任务不同的是，这个操作在队列清空前是不会停止的。这也就意味着，错误的使用 `process.nextTick()` 方法会导致 node 进入一个死循环，直到内存泄漏。

2. setTimeout 和 setImmediate

这两个方法最容易被弄混。实际上，某些情况下这两个方法的表现也非常相似。然而实际上，这两个方法的意义却大为不同。

`setTimeout()` 方法是定义一个回调，并且希望这个回调在我们所指定的时间间隔后第一时间去执行。注意这个“第一时间执行”，这意味着，受到操作系统和当前执行任务的诸多影响，该回调并不会在我们预期的时间间隔后精准的执行。执行的时间存在一定的延迟和误差，这是不可避免的。node 会在可以执行 timer 回调的第一时间去执行你所设定的任务。

`setImmediate()` 方法从意义上将是立刻执行的意思，但是实际上它却是在一个固定的阶段才会执行回调，即 `poll` 阶段之后。有趣的是，这个名字的意义和之前提到过的 `process.nextTick()` 方法才是最匹配的。node 的开发者们也清楚这两个方法的命名上存在一定的混淆，他们表示不会把这两个方法的名字调换过来---因为有大量的 node 程序使用着这两个方法，调换命名所带来的好处与它的影响相比不值一提。

`setTimeout()` 和不设置时间间隔的 `setImmediate()` 表现上及其相似。猜猜下面这段代码的结果是什么？

```js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
```

实际上，答案是不一定。这取决于这段代码的运行环境。运行环境中的各种复杂的情况会导致在同步队列里两个方法的顺序随机决定。

但是，在一种情况下可以准确判断两个方法回调的执行顺序，那就是在一个I/O事件的回调中。下面这段代码的顺序永远是固定的：

```js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
// immediate
// timeout
```

因为在I/O事件的回调中，setImmediate方法的回调永远在timer的回调前执行。

## 参考

- [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [详解JavaScript中的Event Loop（事件循环）机制](https://zhuanlan.zhihu.com/p/33058983)
- [JavaScript 运行机制--Event Loop详解](https://juejin.im/post/5aab2d896fb9a028b86dc2fd)
