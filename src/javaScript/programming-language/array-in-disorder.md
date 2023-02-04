# 数组乱序

乱序的意思就是将数组打乱。

## Math.random

一个经常会遇见的写法是使用 `Math.random()`：

```js
var arr = [1, 2, 3, 4, 5]
arr.sort((a, b) => Math.random() - 0.5);
console.log(arr);
```

`Math.random() - 0.5` 会随机得到一个正数、负数或者 0。如果是正数则降序排列，如果是负数则升序排列，如果是 0 就不变，然后不断的升序或者降序，最终得到一个乱序的数组。

看起来很完美的方案，但是实际上不尽人意，写个 demo 测试：

```js
var times = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
for (let i = 0; i < 100000; i ++) {
  var arr = [1, 2, 3, 4, 5]
  arr.sort((a, b) => Math.random() - 0.5);
  times[arr[4]]++;
}
console.log(times); // {1: 24904, 2: 7057, 3: 21116, 4: 18826, 5: 28097}
```

测试原理是：将 `[1, 2, 3, 4, 5]` 乱序 10 万次，然后统计最后一位元素是 1、2、3、4、5 的次数分别是多少。

一次随机得到的结果是：

```
[30636, 30906, 20456, 11743, 6259]
```

可以看到，这几数字出现的次数之间的差别是很大的，最后一个元素是 2 的次数远远小于 1 的次数。所以这个方案有问题。

可是明明感觉这个方法还不错呐？而实际上上，这是受到 `sort()` 底层实现的排序算法影响的。v8 在处理 `sort` 方法时，当目标数组长度小于 10 时，使用插入排序；反之，使用快速排序和插入排序的混合排序（现在已经使用 [Timsort](https://segmentfault.com/a/1190000020280815#articleHeader3)）。通过这种排序方法的乱序并不彻底。

那么如何实现真正的乱序呢？而这就要提到经典的 Fisher–Yates 算法。

## Fisher–Yates

Fisher–Yates shuffle 洗牌算法是一种生成有限序列的随机排列的算法，之所以有这个命名,当然是由Fisher和Yates这两个人的发明的。

### 原始算法步骤

开始只是用来人工混排一组数字序列，原始算法的步骤非常容易理解：

1. 写下从 1 到 N 的数字
2. 取一个从 1 到剩下的数字（包括这个数字）的随机数 k
3. 从低位开始，得到第 k 个数字（这个数字还没有被取出），把它写在独立的一个列表的最后一位
4. 重复第 2 步，直到所有的数字都被取出
5. 第 3 步写出的这个序列，现在就是原始数字的随机排列

### 经典的算法

第三步真的去从低位开始数数，实际上可以通过数组的随机访问性直接读取：

1. 给定一组待混排的有限序列 P
2. 新初始化一个空的序列 Q
3. 从 P 中随机选取一个元素
4. 将该元素放到序列 Q 的最后面,并从序列 P 中移除该元素
5. 重复 3-4 的步骤,直到序列 P 中元素全部选取到了序列 Q 中,得到的序列 Q 即为一组 P 的混排序列

```js
function shuffle(arr) {
  if(!Array.isArray(arr)) return [];

  const res = []
  for (let i = arr.length; i > 0; i --) {
    // 随机生成元素的索引地址
    const idx = Math.floor(Math.random() * i) // 0 ~ arr.length - 1
    res.push(arr[idx])
    arr.splice(idx, 1)
  }
  return res
}
```

### 流行的算法

经典算法中需要借助 `res` 所以空间复杂度为 `O(n)`。现代算法在操作过程中不需要借助一个新的序列，而可以直接在当前序列中完成.算法步骤大致相同:

1. 给定一组待混排的有限序列 P
2. 从 P 中随机选取一个未混排的元素
3. 将该元素与序列 P 的最后一个未混排的元素交换
4. 重复 2-3 的步骤,直到序列 P 中元素全部混排过

```js
function shuffle(arr) {
  for (let i = arr.length; i > 0; i--) {
    // 从 arr 中选取一个未混排的元素的索引
    let idx = Math.floor(Math.random() * i); // 0 ~ arr.length - 1
    // 将它和最后一个未混排的元素，即当前元素交换
    let temp = arr[i - 1];
    arr[i - 1] = arr[idx];
    arr[idx] = temp;
  }
  return arr;
}
```

原理很简单，就是遍历数组元素，然后将当前元素与以后随机位置的元素进行交换，从代码中也可以看出，这样乱序的就会更加彻底。

```js
var times = 100000;
var res = {};

for (var i = 0; i < times; i++) {
  var arr = shuffle([1, 2, 3]);
  var key = JSON.stringify(arr);
  res[key] ? res[key]++ :  res[key] = 1;
}

// 为了方便展示，转换成百分比
for (var key in res) {
  res[key] = res[key] / times * 100 + '%'
}

console.log(res)
```

![shuffle](../public/assets/javascript-shuffle.png)

真正的实现了乱序的效果！

### lodash 中的实现

在 lodash 中 `shuffle` 的实现如下，Lodash 库中 `Shuffle` 就是现代算法的实现，不同的是其交换的元素是从数组首位开始的，并且返回一个新数组：

```js
function shuffle(array) {
  const length = array == null ? 0 : array.length;
  if (!length) return [];

  let index = -1;
  const lastIndex = length - 1;
  // const result = copyArray(array);
  const result = array.concat();
  while (++index < length) {
    // 通过 index +，保证向后推移，避免重复
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }

  return result;
}
```

## 参考

- [JavaScript专题之乱序](https://github.com/mqyqingfeng/Blog/issues/51)
- [Fisher–Yates shuffle 洗牌算法](https://www.cnblogs.com/star91/p/FisherYates-shuffle-xi-pai-suan-fa.html)
