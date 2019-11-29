(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{314:function(t,v,_){"use strict";_.r(v);var a=_(0),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"桶排序、计数排序和基数排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#桶排序、计数排序和基数排序"}},[t._v("#")]),t._v(" 桶排序、计数排序和基数排序")]),t._v(" "),_("p",[t._v("这三种排序的时间复杂度都是线性的，为 O(n)，所以这类算法叫作 "),_("strong",[t._v("线性排序")]),t._v("。之所以能做到线性的时间复杂度，主要原因是它们并非是基于比较的排序算法。")]),t._v(" "),_("h2",{attrs:{id:"桶排序（bucket-sort）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#桶排序（bucket-sort）"}},[t._v("#")]),t._v(" 桶排序（Bucket sort）")]),t._v(" "),_("h3",{attrs:{id:"桶排序的核心思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#桶排序的核心思想"}},[t._v("#")]),t._v(" 桶排序的核心思想")]),t._v(" "),_("p",[t._v("桶排序核心思想就是：将要排序的数据分到几个有序的桶里，每个桶里的数据单独进行排序。桶内排完序之后，再依次将它们里的数据取出，就可以组成有序的序列了。")]),t._v(" "),_("h3",{attrs:{id:"时间复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),_("p",[t._v("有 n 个数据，把它们均匀的分到 m 个桶里，每个桶有 k = n/m 个数据。然后每个桶内的数据都使用归并排序（使用快排则不是稳定排序）进行排序，每个桶内的排序时间复杂度为 O(k * logk)，那么总的时间复杂度就是 O(m * k * logk)，把 k = n/m 代入就得到 O(nlogn/m)。"),_("strong",[t._v("当 m 接近 n 时")]),t._v("，这个时候桶排序的数据复杂度就接近 O(n)。")]),t._v(" "),_("h3",{attrs:{id:"使用要求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用要求"}},[t._v("#")]),t._v(" 使用要求")]),t._v(" "),_("ol",[_("li",[t._v("首先要排序的数据要很容易的划分成 m 个同桶，并且桶与桶之间有着天然的大小关系，这样每个桶内的数据排好序之后，桶与桶之间的数据不需要排序。")]),t._v(" "),_("li",[t._v("数据在各个桶之间的分布要比较均匀。在极端情况下，都划分到一个桶里，那么时间复杂度就退化为 O(nlogn) 了。")])]),t._v(" "),_("p",[_("strong",[t._v("桶排序比较适合用在外部排序中")]),t._v("。所谓外部排序就是数据存储在外部磁盘中，数据量比较大，内存有限，无法将数据全部加载到内存中。")]),t._v(" "),_("p",[t._v("例如，我们有 10GB 的订单数据，想按照订单金额（假设都是正整数）进行排序，但是内存有限，只有几百 MB，没办法将 10GB 的数据都加载到内存中。怎么做？")]),t._v(" "),_("p",[t._v("用桶排序的思想来解决这个问题。")]),t._v(" "),_("p",[t._v("首先，我们需要知道金额范围，这样才能划分桶。需要遍历扫描一遍数据，假设扫描之后知道金额最小是 1 元，最大是 10 万元。接着根据订单金额划分成 100 个桶，第一个桶 1~1000，第二个桶 1000~2000，...，依次类推。"),_("strong",[t._v("每个桶对应一个文件，并且按照金额范围的大小顺序编号命名")]),t._v("（00，01，02，...，99）。")]),t._v(" "),_("p",[t._v("理想情况下，订单金额均匀分布，所以被均匀的划分到 100 个文件，每个文件大小为 100 M。")]),t._v(" "),_("p",[t._v("然后我们就可以依次地将这 100 个小文件放到内存中，用快排来进行排序。等所有文件都排好序之后，只"),_("strong",[t._v("需要按照文件编号，从小到大依次读取每个小文件的中的订单数据，并将其写入到一个文件中")]),t._v("，那么这个文件中存储的就是按照金额从小到大排序的订单数据了。")]),t._v(" "),_("p",[t._v("不过，实际中订单金额在 1 元到 10 万元之间可能不是均匀分布的，所以可能某个区间的数据特别多，划分之后对应的文件也就很大，没法一次性读入内存。那又该怎么办？")]),t._v(" "),_("p",[t._v("针对这些划分之后依然很大的文件，处理方式和前面是一样的，对它继续划分。比如 1 元到 1000 元的订单比较多，那么就将这个区间继续划分为 10 个小区间：1~100，100~200，...，900~1000。这样之后如果某个区间还是过大，无法读入内存，比如 1~100 区间还是过大，那就对它继续划分，直到所有文件都可以读入内存。")]),t._v(" "),_("h2",{attrs:{id:"计数排序（counting-sort）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计数排序（counting-sort）"}},[t._v("#")]),t._v(" 计数排序（Counting sort）")]),t._v(" "),_("p",[t._v("技术排序可以看作是桶排序的一种特殊情况。")]),t._v(" "),_("h3",{attrs:{id:"计数排序的核心思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计数排序的核心思想"}},[t._v("#")]),t._v(" 计数排序的核心思想")]),t._v(" "),_("p",[t._v("计数排序的核心思想就是，当要排序 n 个数据的时候，所处的范围并不大，比如最大值是 k，我们就可以把数据划分到 k 个桶，"),_("strong",[t._v("每个桶内的数据都是相同的，节省了桶内排序的时间。")])]),t._v(" "),_("h3",{attrs:{id:"使用要求-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用要求-2"}},[t._v("#")]),t._v(" 使用要求")]),t._v(" "),_("p",[_("strong",[t._v("计数排序只能用在数据范围不大的情况，如果数据范围 k 比要排序的数据量 n 大很多，那就不适合计数排序了。而且计数排序只能给非负整数排序，如果要排序的数据是其他类型，要将其在不改变先对大小的情况下，转化为非负整数")]),t._v("。例如，考生成绩精确到小数点以为，我们可以将所有分数都乘以 10，化成整数。")]),t._v(" "),_("p",[t._v("记得高考查分数吗？查分数的时候会显示我们的成绩还有排名。加入所在省份有 50 万考生，如何通过成绩快速排序得出名次呢？")]),t._v(" "),_("p",[t._v("考生满分 900 分，最低分 0 分，这个数据范围很小，所以可以分成 901 个桶，对应分数从 0 分到 900 分。接着根据考生的成绩，将 50 万的考生划分到这 901 个桶里，桶内的数据都是分数相同的考生，所以不需要再进行排序。然后依次扫描每个桶，将桶内的考生依次输出到一个数组中，就可以实现 50 万个考生的成绩排序。这个过程只涉及扫描遍历，所以时间复杂度时 O(n)。")]),t._v(" "),_("h2",{attrs:{id:"基数排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基数排序"}},[t._v("#")]),t._v(" 基数排序")]),t._v(" "),_("p",[t._v("假设现在有 10 万个手机号，希望将它们从小到大排序，有什么比较快的排序方法呢？")]),t._v(" "),_("p",[t._v("通过快排，时间复杂度可以做到 O(nlogn)，还有更高效的吗？桶排序、计数排序不太合适，手机号码有 11 位，范围太大。那有没有时间复杂度是 O(n) 的算法呢？看一下基数排序是怎么做的。")]),t._v(" "),_("p",[t._v("刚刚问题，我们需要注意到：假设比较两个手机号码 a、b 的大小，如果前面几位中，a 已经比 b 大，那后面的就不用看了。")]),t._v(" "),_("p",[t._v("借助"),_("strong",[t._v("稳定的排序")]),t._v("，这里有一个巧妙的设计思路：先按照最后 1 位来排序，然后再按照倒数第 2 位排序，依次类推，最后按照第 1 位进行排序。经过 11 次排序之后，手机号码就都是有序的了。")]),t._v(" "),_("p",[t._v("注意每一位的排序算法都要是稳定的，否则就不正确了。如果是非稳定的算法，那么当前位的排序只考虑自己的大小，完全不管其他位大小，这样，那么低位的排序就没有意义了。")]),t._v(" "),_("p",[t._v("每一位的排序都可以通过桶排序或者计数排序来实现，它们的时间复杂度是 O(n)，排序的数据有 k 位，那么时间复杂度就是 O(k*n)，k 不 大的时候，比如手机号码为 11 位，这个时候时间复杂度就接近于 O(n)。")]),t._v(" "),_("h3",{attrs:{id:"使用要求-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用要求-3"}},[t._v("#")]),t._v(" 使用要求")]),t._v(" "),_("p",[t._v("首先数据要可以分割出独立的“位”来比较，而且位之间有递进的关系，即如果 a 数据的高位比 b 数据大，那剩下的低位就不用比较了。除此之外，每一位的数据范围不能太大，要可以使用线性排序算法（桶排序、计数排序）来排序。否则，基数排序的时间复杂度就做不到 O(n) 了。")])])}),[],!1,null,null,null);v.default=s.exports}}]);