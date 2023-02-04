# 数组去重，扁平化和最值

看看这几个常见操作的实现

## 数组去重

数组去重的方式有很多种：

### 1. ES6 Set

```js
function unique1(array) {
  return Array.from(new Set(array));
}

// 再简化一下
function unique1(array) {
  return [...new Set(array)]
}
```

### 2. 双重循环

```js
function unique2(array) {
  var res = [];
  for (var i = 0, aLen = array.length; i < aLen; i++) {
    for (var j = 0, rLen = res.length; j < rLen; j++) {
      if (res[j] === array[i]) break;
    }
    // 如果执行完循环之后， j 等于 rLen，说明已经遍历全部，没有重复
    if (j === rLen) {
      res.push(array[i]);
    }
  }
  return res;
}
```

### 3. indexOf

```js
function unique3(array) {
  var res = [];
  for (var i = 0, aLen = array.length; i < aLen; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i])
    }
  }
  return res;
}
```

### 4. sort

```js
function unique4(array) {
  var res = [];
  var sortArray = array.concat().sort();
  for (let i = 0; i < sortArray.length; i++) {
    // 如果是第 1 个元素，或者和前一个元素不想等
    if (i === 0 || sortArray[i] !== sortArray[i - 1]) {
      res.push(sortArray[i]);
    }
  }
  return res;
}
```

### 5. hash

```js
function unique5(array) {
  var map = {};
  var res = array.filter(function (item) {
    // 对象的键值会自动转成字符串，加上类型区分
    let key = typeof item + item;
    return map.hasOwnProperty(key)
      ? false
      : map[key] = true;
  });
  return res;
}
```

### 6. filter 和 indexOf

```js
function unique6(array) {
  var res = array.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
  return res;
}
```

### 去重结果对比

这些去重的方法实际上会存在一些差异，主要是对 `NaN` 和对象的判断存在差异，看一下：

```js
var array = [
  1, 1, '1', '1', null, null, undefined, undefined, 
  new String('1'), new String('1'), /a/, /a/, NaN, NaN
];
unique1(array);
unique2(array);
unique3(array);
unique4(array);
unique5(array);
unique6(array);
```

| 方法 | 结果 | 说明 |
|:----:|:----|:-----|
| ES6 Set | [1, "1", null, undefined, String, String, /a/, /a/, NaN] | 对象不去重 |
| 双重循环 | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN] | 对象和 NaN 不去重 |
| indexOf | [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN] | 对象和 NaN 不去重 |
| sort | [/a/, /a/, 1, "1", String, String, NaN, NaN, null, undefined] | 对象和 NaN 不去重 |
| hash | [1, "1", null, undefined, String, /a/, NaN] | 都去重 |
| filter 和 indexOf | [1, "1", null, undefined, String, String, /a/, /a/] | 对象不去重，NaN 被忽略 |

为什么会出现这种差异？看两个 demo ：

```js
var arr = [1, 2, NaN];
arr.indexOf(NaN); // -1
```

`indexOf` 底层还是使用 `===` 进行判断，因为 `NaN ==== NaN` 的结果为 `false`，所以使用 `indexOf` 查找不到 `NaN` 元素。

```js
function unique(array) {
  return Array.from(new Set(array));
}
console.log(unique([NaN, NaN])) // [NaN]
```

`Set` 认为尽管 `NaN === NaN` 为 `false`，但是这两个元素是重复的。

## 数组扁平化

数组的扁平化，就是将一个嵌套多层的数组 array（嵌套可以是任何层数）转换为只有一层的数组。举个例子:

```js
var arr = [1, [2, [3, 4]]];
flatten(arr) // [1, 2, 3, 4]
```

### 递归

```js
function flatten(array) {
  let res = [];
  array.forEach(function (item) {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  })
  return res;
}
var arr = [1, [2, [3, 4]]];
flatten(arr) // [1, 2, 3, 4]
```

### reduce

```js
function flatten(array) {
  return array.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
var arr = [1, [2, [3, 4]]];
flatten(arr) // [1, 2, 3, 4]
```

### 扩展运算符

ES6 增加了扩展运算符，扩展运算符(...)可以将一个数组变为参数序列。

```js
var arr = [1, [2, [3, 4]]];
// concat 将数组或值连接成新数组
[].concat(...arr); // [1, 2, [3, 4]]
```

这种方法只可以扁平一层，但是顺着这个方法一直思考，就可以写出这样的方法：

```js
function flatten(array) {
  while (array.some(item => Array.isArray(item))) {
    array = [].concat(...array);
  }
  return array;
}
var arr = [1, [2, [3, 4]]];
flatten(arr) // [1, 2, 3, 4]
```

### underscore 的 flatten 实现

这里的 `flatten` 函数并不是最终的 `_.flatten`，为了方便多个 API 进行调用，这里对扁平进行了更多的配置。

```js
/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否过滤掉非数组元素
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten(input, shallow, strict, output) {
  // 递归使用的时候会用到 output
  output = output || [];
  var idx = output.length;

  for (var i = 0, len = input.length; i < len; i++) {
    var value = input[i];
    if (Array.isArray(value)) {
      // 如果是数组，就进行处理
      if (shallow) {
        // 如果是只扁平一层，遍历该数组，依此填入 output
        var j = 0, 
            length = value.length;
        while (j < length) output[idx++] = value[j++];
      } else {
        // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
        flatten(value, shallow, strict, output);
        idx = output.length;
      }
    } else if (!strict) {
      // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
      output[idx++] = value;
    }
  }

  return output;
}

_.flatten = function(array, shallow) {
  return flatten(array, shallow, false); // 不需要去掉非数组元素
};
```

## 数组最值

为了找到数组中的最大值或者最小值，可以先看 `Math.max` 的使用。`Math.max` 函数返回一组数中的最大值，用法是：

```js
Math.max([value1[,value2, ...]])
```

值得注意的是：

1. 如果有任一参数不能被转换为数值，则结果为 NaN。
2. 如果没有参数，则结果为 -Infinity (注意是负无穷大).

```js
// 如果参数可以被转换成数字，就可以进行比较
Math.max(true, 0) // 1
Math.max(true, '2', null) // 2
Math.max(1, undefined) // NaN
Math.max(1, {}) // NaN
```

### 最原始的方法，循环遍历比较

```js
function max(array) {
  let res = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > res) res = array[i];
  }
  return res;
}

var arr = [6, 4, 1, 8, 2, 11, 23];
max(arr);
```

### reduce

```js
function max(array) {
  return array.reduce((pre, cur) => Math.max(pre, cur))
}

var arr = [6, 4, 1, 8, 2, 11, 23];
max(arr);
```

### apply

```js
var arr = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max.apply(null, arr))
```

###  ES6 扩展运算符

```js
var arr = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max(...arr))
```

## 参考

- [JavaScript专题之数组去重](https://juejin.im/post/5949d85f61ff4b006c0de98b)
- [JavaScript 专题之数组扁平化](https://juejin.im/post/59716f15f265da6c4c500fc7)
- [JavaScript专题之如何求数组的最大值和最小值](https://github.com/mqyqingfeng/Blog/issues/35)