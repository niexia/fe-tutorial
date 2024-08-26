# 应用

## 数据转换

将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式

1. 找到到空隙加 `.`

```js
var str = '10000000000'
str.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
```

`\B` 指定非单词边界；`(\d{3})+` 需要匹配由 3 个数字组成 1 组或多组；`(?!\d)` 负先行断言，后面不能再跟数字；`(?=(\d{3})+(?!\d))` 正先行断言，后面需要跟随由 3 个数字组成的 1 组或 多组。

所以这里匹配到了 `10 000 000 000` 三个空位，把它们替换成 `.`

2. 找到数字并在后面加 `.`

```js
var str = '10000000000'
str.replace(/(\d)(?=(\d{3})+\b)/g, '$1.')

// 或者
var str = '10000000000'
str.replace(/\d(?=(\d{3})+\b)/g, '$&.')
```