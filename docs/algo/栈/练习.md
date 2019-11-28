# 练习

## 栈的压入、弹出序列

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。

例如序列 `{1, 2, 3, 4, 5}` 是某栈的压入顺序，序列 `{4, 5, 3, 2, 1}` 是该压栈序列对应的一个弹出序列，但 `{4, 3, 5, 1, 2}`就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

### 思路

1. 使用一个栈 `stack` 来根据压入顺序，依次压入数据，同时定义索引 `index` 指向弹出序列的第一个位置。
2. 每次入栈，如果栈顶的数据和 `index` 指向的值相等，则将该数据出栈，并且 `index++` 向后移一位，指向下一个出栈的数据。
3. 循环判断栈顶数据和 `index` 指向的值是否还相等，如果还相等，则和上一步操作相同，将数据出栈并 `index++`。
4. 如果不想等，并且还有数据，则继续入栈。
5. 入栈结束后，如果 `stack` 为空，则说明弹出序列是该栈的弹出顺序，反之不是。

### 代码实现

```js
function isPopOrder(pushOrder, popOrder) {
  if (
    !pushOder ||
    !popOrder ||
    pushOrder.length === 0 ||
    popOrder.length === 0
  ) {
    return false;
  }

  let stack = [];
  let index = 0;
  for (let i = 0, length = pushOrder.length; i < length; i++) {
    stack.push(pushOrder[i]);
    while (stack.length && stack[stack.length - 1] === pushOrder[index]);
    stack.pop();
    index++;
  }

  return stack.length === 0;
}
```