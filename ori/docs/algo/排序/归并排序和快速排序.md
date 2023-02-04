# 归并排序和快速排序

归并排序和快速排序的时间复杂度都是 O(nlogn) 的排序算法。都用到了分治思想，可以借鉴这个思想，来解决非排序的问题，比如：如何在 O(n) 的时间复杂度内查找一个无序数组中的第 K 大元素？

## 归并排序

先看一下归并排序的原理。

### 归并排序原理

如果要排序一个数组，先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就有序了。

**归并排序使用的就是分治思想**。分治，就是分而治之。讲一个大问题分解成小的子问题来解决，小的子问题解决了，大问题也就解决了。

通过上面的描述，感觉分治思想和递归思想很相似。是的，分治算法一般都是用递归来实现的。**分治是一种解决问题的处理思想，递归是一种编程技巧**。

为了写出归并排序的代码，先要找到递推公式和终止条件：

```
// 递推公式
mergeSort(p...r) = merge(mergeSort(p...q), mergeSort(q+1...r))

// 终止条件
p >= r
```

也就是说，给一个下标从 p 到 r 的数组排序，可以转化为两个子问题：`mergeSort(p...q)` 和` mergeSort(q+1...r)`，其中 q 为 p 和 r 的中间位置，即 `q = (p+r)/2`。当两个子数组排好序之后，再将两个有序的子数组合并起来，这样 p 到 r 也就排好序了。

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // 从中间分解
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  // 定义合并函数
  const mergeArr = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let temp = [];
    // 比较两个数组中元素的大小，依次插入到 temp 中
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        temp.push(left[leftIndex]);
        leftIndex++;
      } else {
        temp.push(right[rightIndex]);
        rightIndex++;
      }
    }
    // 将剩下元素的放到末尾
    temp = temp.concat(left.slice(leftIndex), right.slice(rightIndex));
    return temp;
  }
  // 递归 分解 合并
  return mergeArr(mergeSort(left), mergeSort(right));
}

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.random() * 1000);
}
console.log(arr);
mergeSort(arr);
```

### 归并排序的性能分析

#### 归并排序是稳定的排序算法吗？

归并排序稳不稳定关键要看 `merge` 函数，在合并过程中，如果 A[p...q] 和 A[q+1...r] 之间有相同的值，那么只要先把 A[p...q]的元素先放入，这样就能保证值相同的元素，在合并前后的先后顺序不变。所以，归并排序是一个稳定的排序算法。

#### 归并排序的时间复杂度是多少？

归并排序是通过递归实现的。递归就是把一个大问题 a 分解成几个小问题 b、c 来求解，求小问题 b、c 解决之后，再把小问题的结果合并成大问题 a 的解。

如果我们定义求解大问题的 a 的时间是 T(a)，求解小问题 b、c 的时间分别是 T(b) 和 T(c)，那么就可以得到这样的递推公式：

```
T(a) = T(b) + T(c) + K
```

其中 K 为将两个子问题 b、c 的结果合并成 a 的结果所消耗的时间。

从上面的分析，我们可以得到一个结论：**不仅递归求解的问题可以写成递推公式，递归代码的时间复杂度也可以写成递归公式**。

假设对长度为 n 的数组进行归并排序所需要时间是 T(n)，那分解两个子数组排序的时间都是 T(n/2)，而 `merge` 两个有序子数组的时间复杂度是 O(n)。那么归并排序的时间复杂度的计算公式就是：

```
T(n) = 2T(n/2) + n; n > 1
T(1) = C; n = 1，只需要常量级的执行时间，所以表示为 C
```

所以就有：

```
T(n) = 2*T(n/2) + n
     = 2*(2*T(n/4) + n/2) + n
     = ...
     = 2^k * T(n/2^k) + k * n
     = ...
```

当 T(n/2^k) = 1 时，即 n/2^k = 1 时，就可以得到 k = log2n。把 k 代入表达式就有：

```
T(n) = n * C + nlog2n
```

用大 O 表示法表示的话 T(n) = O(nlogn)，所以归并排序的时间复杂度就是 **`T(n) = O(nlogn)`**。

#### 归并排序的空间复杂度是多少？

我们知道，在归并排序过程中，在合并的时候需要额外的空间，那归并排序的空间复杂度是多少？O(n) 还是 O(nlogn)，怎样分析？

通过时间复杂度的分析过程，如果也按照递归的方式求解，那么就会得到 O(nlogn)，不过这个思路是不对的。实际上，**递归代码的空间复杂度不能像时间复杂度一样进行累加，在任意时刻，CPU 只会有一个函数执行，也就是只有一个临时的内存空间在使用，而这个函数执行完之后，内存空间也被释放掉了**。

虽然我们每次合并操作都需要额外的空间，但是合并之后，临时开辟的空间就会释放掉。临时的内存空间最大也不会超过 n 个数据的大小，所以空间复杂度是 **O(n)**。

所以归并排序不是一个原地排序算法，也正是这样，虽然归并排序的时间复杂度在任何时刻都是 O(nlogn)，非常优秀（快速排序的最坏时间度是 O(n^2)），但是归并排序并没有快排那样，应用广泛。

## 快速排序

快速排序简称“快排”，它也利用分治思想。

### 快速排序的原理

快排的原理是：如果要排序数组中下标从 p 到 r 之间的一组数据，我们选择 p 到 r 之间任意的一个数据作为 **pivot**（分区点）。然后遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，大于 pivot 的放到右边，将 pivot 放到中间。经过这一个步骤之后，数组 p 到 r 之间的数据就被分成了 3 个部分，前面 p 到 q-1 之间都是小于 pivot 的，中间是 pivot，后面 q+1 到 r 之间是大于 pivot 的。

根据分治、递归的处理思想，接着递归 p 到 q+1 和 q+1 到 r 之间的数据，直到区间缩小为1，就说明数据有序了。

上面的过程用递推工时来表示就是：

```js
// 递推公式
quickSort(p...r) = quickSort(p...q-1) + quickSort(q+1...r)

// 终止条件
p >= r
```

```js
function quickSort(arr) {
  // 交换位置
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // 根据 pivot 进行分区
  const partition = (arr, pivot, left, right) => {
    const pivotVal = arr[pivot];
    // 通过 i 把数组分成两个部分，左边是已处理区间，每次
    // 从未处理区间取一个取一个元素来进行比较
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivotVal) {
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i, pivot);
    return i;
  }
  const _quickSort = (arr, left, right) => {
    if (left >= right) return;
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    _quickSort(arr, left, partitionIndex - 1);
    _quickSort(arr, partitionIndex + 1, right);
  }
  _quickSort(arr, 0, arr.length - 1);
}
let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.random() * 1000);
}
console.log(arr);
quickSort(arr);
```

设计原地分区函数，如果不考虑空间消耗，申请两个临时数组 X 和 Y，遍历 A[p...r]，将小于 pivot 的放到 X，大于 pivot 的放到 Y，最后再将 X 和 Y数据拷贝到 A[p...r]。但是这样实现的话，快排就需要额外的空间了。通过巧妙的设计原地分区函数，使得空间复杂度为 O(1)，使得**快排是原地排序算法**。

在执行分区的时候，如果数组有两个相同的元素，比如序列 6, 8, 7, 6, 3, 5, 9, 4，在经过第一次分区操作之后，两个 6 相对的先后顺序就会改变，所以**快速排序不是稳定的排序算法**。

通过上面的分析发现：**归并排序的处理过程是下到上，先处理子问题，然后在合并。而快排正好相反，它的处理过程是由上到下，先分区，再处理子问题。**

归并排序虽然稳定的、时间复杂度为 O(nlogn)，但是在合并的时候需要临时的空间，所以是非原地排序。快速排序通过设计巧妙的原地分区函数，可以实现原地排序，解决了归并排序占用太多内存的问题。

### 快速排序的性能分析

通过前面的原理，已经知道快排是一种原地、不稳定的排序算法。现在看看快排的时间复杂度。

快排也是递归来实现了，所以前面总结的公式还适用：

```
T(n) = 2T(n/2) + n; n > 1
T(1) = C; n = 1
```

这时快排的时间复杂度是 O(nlogn)，但**前提是**每次分区操作选择的 pivot 都很合适，能将数组分成大小接近相等的两个小区间。这是很难实现的。

举一个极端的例子，例如数组中的数据原来已经有序了：1, 2, 3, 4, 5，如果每次都选最优一个元素作为 pivot，那么每次分区得到的两个区间都是不均等的。需要大约 n 次分区操作，才能完成快排操作，这个时候递推公式变为：

```
T(n) = T(n-1) + n;
```

这个时候，时间复杂度就又 O(nlogn) 退化成 O(n^2)。

所以**快排在大部分的情况下时间复杂度都是 O(nlogn)，只有在极端情况下才会退化到 O(n^2)**。

## 总结

### 解答开篇

先解答文章开头问题，如何在 O(n) 的时间复杂度内查找一个无序数组中的第 K 大元素？比如，4， 2， 5， 12， 3 这样一组数据，第 3 大元素就是 4。

选择数组区间 A[0…n-1] 的最后一个元素 A[n-1] 作为 pivot，对数组 A[0…n-1] 原地分区，这样数组就分成了三部分，A[0…p-1]、A[p]、A[p+1…n-1]。

如果 p+1 = K，那 A[p] 就是要求解的元素；如果 K > p+1, 说明第 K 大元素出现在 A[p+1…n-1] 区间，再按照上面的思路递归地在 A[p+1…n-1] 这个区间内查找。同理，如果 K < p+1，那我们就在 A[0…p-1] 区间查找。

```js
function kthNum(arr, k) {
  if (arr.length < k) return -1;

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i, right);
    return i;
  }

  let p = partition(arr, 0, arr.length - 1)
  while (p + 1 != k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, arr.length - 1);
    }
  }
  return arr[p]
}
```

分析一下这段代码的时间复杂度。

1. 第一次分区查找，需要对大小为 n 的数组执行分区操作，需要遍历 n 个元素；
2. 第二次分区分析查找，只需要对大小为 n/2 的数组执行分区操作，需要遍历 n/2 个元素；
3. ...

把每次遍历的元素个数相加：n + n/2 + n/4 + ... + 1。这是一个等比数列，根据等比数列的求和公式，计算得到和为 2n-1，所以时间复杂度为 O(n)。

有个比较直接的方法，就是每次取数组的最小值，将其移动到数组的最前面，然后从剩下的的数组中继续查找最小值，以此类推，执行 K 次，这样也可以找到第 K 大元素。不过时间复杂度就不是 O(n) 了，而是 O(K*n)。

### 小结

归并排序和快速排序是两种稍微复杂的排序算法，它们用的都是分治的思想，代码都通过递归来实现，过程非常相似。理解归并排序的重点是理解递推公式和 merge() 合并函数。同理，理解快排的重点也是理解递推公式，还有 partition() 分区函数。

归并排序算法是一种在任何情况下时间复杂度都比较稳定的排序算法，这也使它存在致命的缺点，即归并排序不是原地排序算法，空间复杂度比较高，是 O(n)。正因为此，它也没有快排应用广泛。

快速排序算法虽然最坏情况下的时间复杂度是 O(n2)，但是平均情况下时间复杂度都是 O(nlogn)。不仅如此，快速排序算法时间复杂度退化到 O(n2) 的概率非常小，我们可以通过合理地选择 pivot 来避免这种情况。

