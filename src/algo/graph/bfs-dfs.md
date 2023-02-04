# 深度优先和广度优先搜索

有一个六度分割理论，具体是说，你与世界上的另一个人间隔的关系不会超过六度，也就是说平均只需要六步就可以联系到任何两个互不相识的人。

一个用户的一度连接用户很好理解，就是他的好友，二度连接用户就是他好友的好友，三度连接用户就是他好友的好友的好友。在社交网络中，我们往往通过用户之间的连接关系，来实现推荐“可能认识的人”这么一个功能。现在给你一个用户，如何找出这个用户的所有三度（其中包含一度、二度和三度）好友关系？

## 什么是“搜索”算法？

我们知道，算法是作用于具体数据结构之上的，深度优先搜索算法和广度优先搜索算法都是基于“图”这种数据结构的。这是因为，图这种数据结构的表达能力很强，大部分涉及搜索的场景都可以抽象成“图”。

图上的搜索算法，最直接的理解就是，在图中找出从一个顶点出发，到另一个顶点的路径。具体方法有很多，现在看两种最简单、最“暴力”的深度优先、广度优先搜索。

图有两种主要存储方法，邻接表和邻接矩阵。这里会用邻接表来存储图。需要说明一下，深度优先搜索算法和广度优先搜索算法，既可以用在无向图，也可以用在有向图上。这里以无向图为例。

接下来先创建图：

```js
class Graph {
  constructor() {
    this.vertices = [] // 顶点集合
    this.edges = new Map() // 邻接表
  }

  // 添加顶点方法
  addVertex = function(v) {
    this.vertices.push(v)
    this.edges.set(v, [])
  }

  // 添加边方法
  addEdge = function(v, w) {
    // v 顶点的边添加 w
    let vEdge = this.edges.get(v)
    vEdge.push(w)
    // w 顶点的边添加 v
    let wEdge = this.edges.get(w)
    wEdge.push(v)
    // 更新邻接表
    this.edges.set(v, vEdge)
    this.edges.set(w, wEdge)
  }

  // 打印图
  toString = function() {
    var s = ''
    for (var i=0; i<this.vertices.length; i++) {
      s += this.vertices[i] + ' -> '
      var edge = this.edges.get(this.vertices[i])
      for (var j = 0; j < edge.length; j++) {
          s += edge[j] + ' '
      }
      s += '\n'
    }
    return s
  }
}

var graph = new Graph()
var vertices = [1, 2, 3, 4, 5]
for (var i=0; i<vertices.length; i++) {
  graph.addVertex(vertices[i])
}
graph.addEdge(1, 4);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 5);

console.log(graph.toString())
```

## 广度优先搜索（BFS）

广度优先搜索（Breadth-First-Search），我们平常都把简称为 BFS。直观地讲，它其实就是一种“**地毯式**”层层推进的搜索策略，**即先查找离起始顶点最近的，然后是次近的，依次往外搜索**。实际上这样求得的路径就是从 s 到 t 的最短路径。

```js
bfs(s, t) {
  if (s == t) return; 
  // 是用来记录已经被访问的顶点，用来避免顶点被重复访问
  let visited = new Map(); 
  visited[s] = true; 
  // 是一个队列，用来存储已经被访问、但相连的顶点还没有被访问的顶点
  let queue = new Array(); 
  queue.push(s);
  // 用来记录搜索路径。当我们从顶点 s 开始，广度优先搜索到顶点 t 后，
  // prev 数组中存储的就是搜索的路径。不过，这个路径是反向存储的。
  // prev[w] 存储的是，顶点 w 是从哪个前驱顶点遍历过来的。
  let prev = new Map();
  while (queue.length != 0) { 
    let w = queue.shift();
    if (!this.edges.has(w)) return false;
    let edges = this.edges.get(w);
    for (let i = 0; i < edges.length; ++i) { 
      let q = edges[i];
      if (!visited[q]) {
        prev[q] = w; 
        if (q == t) { 
          this.print(prev, s, t); return true; 
        } 
        visited[q] = true; 
        queue.push(q);
      } 
    }
  }
  return false;
}
// 递归打印 s->t 的路径
print(prev, s, t) {
  if (prev[t] && t != s) { 
    this.print(prev, s, prev[t]);
  } 
  console.log(t + " ")
}
```

最坏情况下，终止顶点 t 离起始顶点 s 很远，需要遍历完整个图才能找到。这个时候，每个顶点都要进出一遍队列，每个边也都会被访问一次，所以，广度优先搜索的时间复杂度是 **O(V+E)**，其中，V 表示顶点的个数，E 表示边的个数。

当然，对于一个连通图来说，也就是说一个图中的所有顶点都是连通的，E 肯定要大于等于 V-1，所以，广度优先搜索的时间复杂度也可以简写为 O(E)。广度优先搜索的空间消耗主要在几个辅助变量 `visited` 数组、`queue` 队列、`prev` 数组上。这三个存储空间的大小都不会超过顶点的个数，所以空间复杂度是 **O(V)**。

## 深度优先搜索（DFS）

深度优先搜索（Depth-First-Search），简称 DFS。最直观的例子就是“走迷宫”。

假设你站在迷宫的某个岔路口，然后想找到出口。你随意选择一个岔路口来走，走着走着发现走不通的时候，你就回退到上一个岔路口，重新选择一条路继续走，直到最终找到出口。这种走法就是一种深度优先搜索策略。

```js
dfs(s, t) {
  let found = false;
  let visited = new Map(); 
  let prev = new Map();
  let recurDfs = (w, t, visited, prev) => {
    if (found == true) return;
    visited[w] = true;
    if (w == t) {
      found = true;
      return;
    }
    let edges = this.edges.get(w);
    for (let i = 0; i < edges.length; ++i) { 
      let q = edges[i];
      if (!visited[q]) {
        prev[q] = w;
        recurDfs(q, t, visited, prev);
      }
    }
  }
  recurDfs(s, t, visited, prev);
  if (found) {
    this.print(prev, s, t);
    return true;
  }
}

print(prev, s, t) {
  if (prev[t] && t != s) { 
    this.print(prev, s, prev[t]);
  } 
  console.log(t + " ")
}
```

深度每条边最多会被访问两次，一次是遍历，一次是回退。所以，图上的深度优先搜索算法的时间复杂度是 **O(E)**，E 表示边的个数。

度优先搜索算法的消耗内存主要是 `visited`、`prev` 数组和递归调用栈。`visited`、`prev` 数组的大小跟顶点的个数 V 成正比，递归调用栈的最大深度不会超过顶点的个数，所以总的空间复杂度就是 **O(V)**。

## 完整代码

```js
class Graph {
  constructor() {
    this.vertices = [] // 顶点集合
    this.edges = new Map() // 邻接表
  }

  // 添加顶点方法
  addVertex = function(v) {
    this.vertices.push(v)
    this.edges.set(v, [])
  }

  // 添加边方法
  addEdge = function(v, w) {
    // v 顶点的边添加 w
    let vEdge = this.edges.get(v)
    vEdge.push(w)
    // w 顶点的边添加 v
    let wEdge = this.edges.get(w)
    wEdge.push(v)
    // 更新邻接表
    this.edges.set(v, vEdge)
    this.edges.set(w, wEdge)
  }

  // 打印图
  toString = function() {
    var s = ''
    for (var i=0; i<this.vertices.length; i++) {
      s += this.vertices[i] + ' -> '
      var edge = this.edges.get(this.vertices[i])
      for (var j = 0; j < edge.length; j++) {
          s += edge[j] + ' '
      }
      s += '\n'
    }
    return s
  }
  // 广度优先
  bfs(s, t) {
    if (s == t) return; 
    // 是用来记录已经被访问的顶点，用来避免顶点被重复访问
    let visited = new Map(); 
    visited[s] = true; 
    // 是一个队列，用来存储已经被访问、但相连的顶点还没有被访问的顶点
    let queue = new Array(); 
    queue.push(s);
    // 用来记录搜索路径。当我们从顶点 s 开始，广度优先搜索到顶点 t 后，
    // prev 数组中存储的就是搜索的路径。不过，这个路径是反向存储的。
    // prev[w] 存储的是，顶点 w 是从哪个前驱顶点遍历过来的。
    let prev = new Map();
    while (queue.length != 0) { 
      let w = queue.shift();
      console.log('广度遍历：', w);
      if (!this.edges.has(w)) return false;
      let edges = this.edges.get(w);
      for (let i = 0; i < edges.length; ++i) { 
        let q = edges[i];
        if (!visited[q]) {
          prev[q] = w; 
          if (q == t) { 
            this.print(prev, s, t); return true; 
          } 
          visited[q] = true; 
          queue.push(q);
        } 
      }
    }
    return false;
  }
  // 深度优先
  dfs(s, t) {
    let found = false;
    let visited = new Map(); 
    let prev = new Map();
    let recurDfs = (w, t, visited, prev) => {
      if (found == true) return;
      visited[w] = true;
      if (w == t) {
        found = true;
        return;
      }
      let edges = this.edges.get(w);
      if (!edges || edges.length === 0) return;
      for (let i = 0; i < edges.length; ++i) { 
        let q = edges[i];
        if (!visited[q]) {
          prev[q] = w;
          recurDfs(q, t, visited, prev);
        }
      }
    }
    recurDfs(s, t, visited, prev);
    if (found) {
      this.print(prev, s, t);
      return true;
    }
  }
  
  // 递归打印 s->t 的路径
  print(prev, s, t) {
    if (prev[t] && t != s) { 
      this.print(prev, s, prev[t]);
    }
    console.log(t);
  }
}

var graph = new Graph()
var vertices = [1, 2, 3, 4, 5]
for (var i=0; i<vertices.length; i++) {
  graph.addVertex(vertices[i])
}
graph.addEdge(1, 4);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 5);

console.log(graph.toString())

graph.dfs(1, 5);
graph.bfs(1, 5);
```


## 总结

### 解答开篇

如何找出社交网络中某个用户的三度好友关系？

社交网络可以用图来表示。这个问题就非常适合用图的广度优先搜索算法来解决，因为广度优先搜索是层层往外推进的。首先，遍历与起始顶点最近的一层顶点，也就是用户的一度好友，然后再遍历与用户距离的边数为 2 的顶点，也就是二度好友关系，以及与用户距离的边数为 3 的顶点，也就是三度好友关系。

只需要稍加改造一下广度优先搜索代码，用一个数组来记录每个顶点与起始顶点的距离，非常容易就可以找出三度好友关系。

### 小结

广度优先搜索和深度优先搜索是图上的两种最常用、最基本的搜索算法，比起其他高级的搜索算法，比如 A*、IDA* 等，要简单粗暴，没有什么优化，所以，也被叫作暴力搜索算法。**所以，这两种搜索算法仅适用于状态空间不大，也就是说图不大的搜索**。
。

广度优先搜索，通俗的理解就是，地毯式层层推进，从起始顶点开始，依次往外遍历。广度优先搜索需要**借助队列**来实现，遍历得到的路径就是，起始顶点到终止顶点的最短路径。深度优先搜索用的是回溯思想，非常适合用递归实现。换种说法，深度优先搜索是借助栈来实现的。在执行效率方面，深度优先和广度优先搜索的时间复杂度都是 O(E)，空间复杂度是 O(V)。