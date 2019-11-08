# 二分查找的变形

前面是最简单的一种情况，在不存在重复元素的有序数组中，查找等于给定值的元素。二分查找的变形问题很多，看看几个经典的。

## 查找第一个等于给定值的元素

如果有序的数据集合存在重复元素，怎么找到第一个等于给定值的元素呢？

```js
function binarySearchFirst(arr, target) {
  if (arr.length === 0) return -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      // 如果 mid 等于 0，说明这个元素已经是第一个了；
      // 如果 mid 不等于 0，但是 arr[mid] 的前一个元素小于 target，
      // 那也说明 arr[mid] 就是第一个等于给定值的元素。
      if (mid === 0 || arr[mid - 1] < target) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}
var arr = [1, 2, 3, 4, 5, 5, 7, 7, 7, 8, 8, 9];
binarySearchFirst(arr, 7);
```

## 查找最后一个等于给定值的元素

上面是查找第一个，现在查找最后一个，只需要稍微改一下判断。

```js
function binarySearchLast(arr, target) {
  if (arr.length === 0) return -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      // 如果 mid 等于 arr.length - 1，说明这个元素已经是最后一个了；
      // 如果 mid 不等于 arr.length - 1，但是 arr[mid] 的后一个元素大于 target，
      // 那也说明 arr[mid] 就是最后一个等于给定值的元素。
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}
var arr = [1, 2, 3, 4, 5, 5, 7, 7, 7, 8, 8, 9];
binarySearchLast(arr, 7);
```
## 查找第一个大于等于给定值的元素

实现思路类型，甚至代码更简洁。

```js
function binarySearchFirstBig(arr, target) {
  if (arr.length === 0) return -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      if (mid === 0 || arr[mid - 1] < target) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
var arr = [1, 2, 3, 4, 5, 5, 7, 7, 7, 8, 8, 9];
binarySearchFirstBig(arr, 5);
```

## 查找最后一个小于等于给定值的元素

```js
function binarySearchLastSmall(arr, target) {
  if (arr.length === 0) return -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}
var arr = [1, 2, 3, 4, 5, 5, 7, 7, 7, 8, 8, 9];
binarySearchLastSmall(arr, 5);
```

写二分查住的时候，注意**终止条件、区间上下界更新方法、返回值选择**。