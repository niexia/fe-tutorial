import{_ as s,r as n,o as l,c as a,a as o,b as p,d as e,e as c}from"./app.a6773dcb.js";const t=JSON.parse('{"title":"无限滚动","description":"","frontmatter":{},"headers":[{"level":2,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":2,"title":"element 的 InfiniteScroll 无限滚动","slug":"element-的-infinitescroll-无限滚动","link":"#element-的-infinitescroll-无限滚动","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"javaScript/programming-language/infinite-scroll.md"}'),r={name:"javaScript/programming-language/infinite-scroll.md"},F=p("h1",{id:"无限滚动",tabindex:"-1"},[e("无限滚动 "),p("a",{class:"header-anchor",href:"#无限滚动","aria-hidden":"true"},"#")],-1),y=c('<p>InfiniteScroll 无限滚动，也就是滚动到底部时，加载更多的数据。</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-hidden="true">#</a></h2><p>无限滚动的原理就是，用户滚动，当滚动条到底的时候就加载。所以很关键的一点是要知道滚动条和底部的距离。</p><p>先了解三个概念：</p><ul><li>scrollHeight：只读属性，是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。</li><li>scrollTop：可以获取或设置一个元素的内容垂直滚动的像素数。</li><li>clientHeight：只读属性，对于没有定义CSS或者内联布局盒子的元素为0，否则，它是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。</li></ul><p><img src="/fe-tutorial/assets/javascript-InfiniteScroll-eg1.87fb8fca.png" alt="eg1"></p><p>通过计算就可以的得到滚动条到底部的距离：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">distance = Element.scrollHeight - Element.scrollTop - Element.clientHeight</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="element-的-infinitescroll-无限滚动" tabindex="-1">element 的 InfiniteScroll 无限滚动 <a class="header-anchor" href="#element-的-infinitescroll-无限滚动" aria-hidden="true">#</a></h2><p>可以试一下如何使用 <a href="https://element.eleme.cn/#/zh-CN/component/infiniteScroll" target="_blank" rel="noreferrer">InfiniteScroll</a>，然后 element 的<a href="https://github.com/ElemeFE/element/blob/dev/packages/infinite-scroll/src/main.js" target="_blank" rel="noreferrer">源码</a>是怎么实现的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>\n<span class="line"><span style="color:#A6ACCD;">  name: &#39;InfiniteScroll&#39;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  inserted(el, binding, vnode) {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    const cb = binding.value;</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">    const vm = vnode.context;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    // only include vertical scroll</span></span>\n<span class="line"><span style="color:#A6ACCD;">    const container = getScrollContainer(el, true);</span></span>\n<span class="line"><span style="color:#A6ACCD;">    const { delay, immediate } = getScrollOptions(el, vm);</span></span>\n<span class="line"><span style="color:#A6ACCD;">    const onScroll = throttle(delay, handleScroll.bind(el, cb));</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">    el[scope] = { el, vm, container, onScroll };</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">    if (container) {</span></span>\n<span class="line"><span style="color:#A6ACCD;">      container.addEventListener(&#39;scroll&#39;, onScroll);</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">      if (immediate) {</span></span>\n<span class="line"><span style="color:#A6ACCD;">        const observer = el[scope].observer = new MutationObserver(onScroll);</span></span>\n<span class="line"><span style="color:#A6ACCD;">        observer.observe(container, { childList: true, subtree: true });</span></span>\n<span class="line"><span style="color:#A6ACCD;">        onScroll();</span></span>\n<span class="line"><span style="color:#A6ACCD;">      }</span></span>\n<span class="line"><span style="color:#A6ACCD;">    }</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"><span style="color:#A6ACCD;">  unbind(el) {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    const { container, onScroll } = el[scope];</span></span>\n<span class="line"><span style="color:#A6ACCD;">    if (container) {</span></span>\n<span class="line"><span style="color:#A6ACCD;">      container.removeEventListener(&#39;scroll&#39;, onScroll);</span></span>\n<span class="line"><span style="color:#A6ACCD;">    }</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#A6ACCD;">};</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>通过指令的方式来实现的，<code>inserted</code> 钩子在被绑定元素插入父节点时调用，首先通过 <code>const container = getScrollContainer(el, true);</code> 获取滚动的元素，这个方法定义在 <code>element-ui/src/utils/dom</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isScroll </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">vertical</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">isServer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">determinedDirection</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vertical</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vertical</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">overflow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">determinedDirection</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vertical</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getStyle</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">overflow-y</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getStyle</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">overflow-x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getStyle</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">overflow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">overflow</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">scroll</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">)/</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getScrollContainer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">vertical</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">isServer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">parent</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ([</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">documentElement</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">parent</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isScroll</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vertical</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">parent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentNode</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span></code></pre></div><p>从该元素开始循环判断父元素是否定义了 <code>overflow</code> 样式，来确定滚动容器 <code>container</code>。</p><p>接下来就会监听滚动容器的滚动事件。滚动的时候就执行 <code>onScroll</code> 方法，为了优化性能，这个方法是节流函数 <code>throttle</code> 执行之后返回的，所以实际上执行的是 <code>handleScroll</code>。这个等会再分析。</p><p>先看下面的代码对 <code>immediate</code> 的判断，如果是 <code>true</code>，即立即执行，则创建一个 <code>new MutationObserver(onScroll)</code> 实例，并监听容器，内容改变之后会执行回调函数 <code>onScroll</code>。</p><p>为什么这么处理呢？</p><p>因为无限滚动是通过滚动加载实现的，如果初始状态下内容无法撑满容器，就无法出现滚动条，那就会造成后面无法滚动加载数据了！这个默认就是 <code>true</code>，保证加载到出现滚动条。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onScroll </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#A6ACCD;">(delay</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handleScroll</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cb))</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;">// ...</span></span>\n<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (container) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scroll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onScroll</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">immediate</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">observer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">scope</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">observer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">MutationObserver</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">onScroll</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">observer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observe</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> childList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> subtree</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">onScroll</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p><code>handleScroll</code> 的实现如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleScroll </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cb</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">observer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">scope</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">distance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">disabled</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getScrollOptions</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">disabled</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">containerInfo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBoundingClientRect</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">containerInfo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">containerInfo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">shouldTrigger</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">container</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// be aware of difference between clientHeight &amp; offsetHeight &amp; window.getComputedStyle().height</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scrollBottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getClientHeight</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">container</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">shouldTrigger</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scrollBottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">distance</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">heightBelowTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getOffsetHeight</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getElementTop</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getElementTop</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">container</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">offsetHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getOffsetHeight</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">container</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">borderBottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parseFloat</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">getStyleComputedProperty</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">borderBottomWidth</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">shouldTrigger</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">heightBelowTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">offsetHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">borderBottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">distance</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">shouldTrigger</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">isFunction</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">cb</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">observer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">observer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">disconnect</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">scope</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">observer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span></code></pre></div><p>看一下主要流程，首先会判断 <code>disabled</code>，如果是 <code>true</code> 直接返回。可以结合官方实例，实际开发中，如果正在加载数据，那么就可以将 <code>disabled</code> 设置为 <code>true</code>，避免多次触发。</p><p>根据容器不同，判断方法有些差异：</p><ol><li>如果滚动容器是绑定的元素本身，那就通过前面说明的那种方式：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollHeight </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clientHeight </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>\n<span class="line"></span></code></pre></div><p>判断是否已经到底部了。这里是判断是否小于等于 <code>distance</code>，它提供了一个配置项，距离底部 <code>distance</code> 的时候就可以触发回调了。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scrollBottom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> container</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getClientHeight</span><span style="color:#A6ACCD;">(container)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">shouldTrigger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> container</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollHeight </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> scrollBottom </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> distance</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><ol start="2"><li>如果滚动容器不是元素本身，那判断就会麻烦一些：</li></ol><p><img src="/fe-tutorial/assets/javascript-InfiniteScroll-eg2.5985e9d4.png" alt="eg2"></p><p>当鼠标往下滚的时候，<code>el</code> 就会向上，<code>heightBelowTop - offsetHeight + borderBottom</code> 其实就是 <code>el</code> 底部到 <code>container</code> 的距离，它和 <code>distance</code> 含义其实是一样的。</p><p><img src="/fe-tutorial/assets/javascript-InfiniteScroll-eg3.29d0fdd2.png" alt="eg3">。</p><p>如果满足条件就会执行回调 <code>cb.call(vm)</code>。同时，上面说过设置 <code>immediate</code> 会立即加载，加载完成之后移除 <code>observer</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (shouldTrigger </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFunction</span><span style="color:#A6ACCD;">(cb)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">cb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (observer) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">observer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">disconnect</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">scope</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">observer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight" target="_blank" rel="noreferrer">Element.scrollHeight</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop" target="_blank" rel="noreferrer">Element.scrollTop</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight" target="_blank" rel="noreferrer">Element.clientHeight</a></li><li><a href="https://element.eleme.cn/#/zh-CN/component/infiniteScroll" target="_blank" rel="noreferrer">InfiniteScroll 无限滚动组件</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver" target="_blank" rel="noreferrer">MDN-MutationObserver</a></li></ul>',35);const D=s(r,[["render",function(s,p,e,c,t,r){const D=n("VueJobs");return l(),a("div",null,[F,o(D),y])}]]);export{t as __pageData,D as default};
