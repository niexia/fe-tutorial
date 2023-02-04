# JavaScript 的诞生和发展

这里先了解一下 JavaScript 的历史，JavaScript与Java在名字或语法上都有很多相似性，但这两门编程语言从设计之初就有很大的不同。

*更多的内容可以查看以下的参考文档*
## 史前时代

万维网的概念与基础技术，是 1989-1991 年间由 CERN 的 Tim Berners-Lee [2003] 创造的。Web 技术在高能物理圈内流通了几年，但并未在物理社区外引起强烈反响。它真正引发关注的契机，还是 1992-1993 年开发的 Mosaicg。这款由本科生 Marc Andreessen 和伊利诺伊大学香槟分校超算中心（NCSA）的 Eric Bina 研发的应用，本质上定义了「Web 浏览器」这一全新软件类别。

NCSA Mosaic 是不仅易装易用，而且带有图形界面的 Web 客户端。它在物理学界之外普及了万维网的概念，传播相当广泛。到 1994 年初，商业资本开始通过获得 Mosaic 代码许可或从头研发仿 Mosaic 式浏览器的方式，争相加入这波浏览器浪潮。SGI（硅谷图形公司）的创始人 Jim Clark 拉到了风险投资，并招来了 Marc Andreessen 和 Eric Bina 两人。**在 1994 年 4 月，他们共同创立了一家公司。这家公司最终定名为 Netscape（ Netscape 通讯），目标是推出世界上最流行的浏览器来替代 Mosaic**。为此，Netscape 从零开始研发了下一代 Mosaic 式浏览器 Netscape Navigatorg，它于 1994 年 10 月起开始发行。到 1995 年初，Netscape Navigator 达到了初始目标，正在迅速地取代 Mosaic。

Tim Berners-Lee 的 Web 技术的核心，是使用声明式的g HTML 标记语言来描述文档，将它们呈现为网页。但业界对于能方便最终用户编排应用操作的脚本语言g [Ousterhout 1997]，也展示出了相当大的兴趣。这些语言诸如微软 Office 中的 Visual Basic 和苹果 AppleScript [Cook 2007] 之类，其设计目标并非用于实现应用核心的复杂数据结构和算法组件。相反地，**它们为用户提供了将此类应用组件「粘合」在一起的新方式。在 Netscape 扩大万维网受众范围的途中，一个重要的问题就是脚本语言「是否应该」与「如何」集成到网页中**。


## Brendan Eich 的加入

Brendan Eich4 于 1985 年在伊利诺伊大学香槟分校硕士毕业，然后立即入职了 SGI 公司，主要从事 Unix 内核和网络层的工作。1992 年，他在离开 SGI 后加盟了 MicroUnity。这是一家资金雄厚的新兴公司，致力于开发视频媒体处理器。在这两家公司，他都实现了用于支持内核与网络编程任务的小型专用语言。在 MicroUnity，他还在 GCC 编译器g上做了些工作。

1995 年初，Brendan Eich 被 Netscape 以「在浏览器里写 Scheme」5为诱饵打动而跳槽了。

目标是把 Scheme 语言嵌入到 Netscape Navigator 浏览器当中。但更早之前， Netscape 已经跟昇阳合作在 Netscape Navigator中支持 Java，这时 Netscape 内部产生激烈的争论。后来 Netscape 决定发明一种与 Java 搭配使用的辅助脚本语言并且语法上有些类似，这个决策导致排除了采用现有的语言，例如Perl、Python、Tcl或Scheme。为了在其他竞争提案中捍卫JavaScript这个想法，公司需要有一个可以运作的原型。Brendan Eich 在 1995 年 5 月仅花了十天时间就把原型设计出来了。

最初命名为 Mocha，1995 年 9 月在Netscape Navigator 2.0 的 Beta 版中改名为 LiveScript，同年 12 月，Netscape Navigator 2.0 Beta 3 中部署时被重命名为 JavaScript，当时 Netscape 公司与 Sun 公司组成的开发联盟为了让这门语言搭上 Java 这个编程语言“热词”，因此将其临时改名为JavaScript，日后这成为大众对这门语言有诸多误解的原因之一。

## 微软 JScript

微软公司于 1995 年首次推出 Internet Explorer，从而引发了与 Netscape 的浏览器大战。微软对Netscape Navigator 解释器进行了逆向工程，创建了 JScript，以与处于市场领导地位的网景产品同台竞争。JScript 也是一种 JavaScript 实现，这两个 JavaScript 语言版本在浏览器端共存意味着语言标准化的缺失，发展初期，JavaScript 的标准并未确定，同期有网景的 JavaScript，微软的 JScript 双峰并峙。除此之外，微软也在网页技术上加入了不少专属对象，使不少网页使用非微软平台及浏览器无法正常显示，导致在浏览器大战期间网页设计者通常会把“用 Netscape 可达到最佳效果”或“用 IE 可达到最佳效果”的标志放在主页。

## 标准化 ECMA

1996 年 11 月，网景正式向ECMA（欧洲计算机制造商协会）提交语言标准。1997年6月，ECMA 以JavaScript 语言为基础制定了 ECMAScript 标准规范 ECMA-262。JavaScript 成为了 ECMAScript 最著名的实现之一。除此之外，ActionScript 和 JScript 也都是 ECMAScript 规范的实现语言。

## ECMAScript 和 JavaScript 的关系

ECMAScript 标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。

因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。

## ES6 与 ECMAScript 2015 的关系

2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。**因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本**。

但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。

但是，标准的制定者不想这样做。他们**想让标准的升级成为常规流程**：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。

标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

**ES6 的第一个版本**，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的 `includes` 方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。

**因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。**
## 参考
- [JavaScript 维基百科](https://zh.wikipedia.org/wiki/JavaScript)
- [JavaScript 二十年](https://cn.history.js.org/index.html)
- [ECMAScript 6 简介](https://es6.ruanyifeng.com/#docs/intro)