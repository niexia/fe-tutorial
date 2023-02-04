import{_ as l,r as a,o as e,c as s,a as n,b as t,d as o,e as p}from"./app.a6773dcb.js";const r=JSON.parse('{"title":"DNS 缓存和预解析","description":"","frontmatter":{},"headers":[{"level":2,"title":"DNS 解析过程","slug":"dns-解析过程","link":"#dns-解析过程","children":[]},{"level":2,"title":"使用 DNS 预解析","slug":"使用-dns-预解析","link":"#使用-dns-预解析","children":[{"level":3,"title":"配置 DNS 预解析","slug":"配置-dns-预解析","link":"#配置-dns-预解析","children":[]},{"level":3,"title":"看一下淘宝怎么使用 DNS 预解析","slug":"看一下淘宝怎么使用-dns-预解析","link":"#看一下淘宝怎么使用-dns-预解析","children":[]},{"level":3,"title":"如何更好的使用","slug":"如何更好的使用","link":"#如何更好的使用","children":[]},{"level":3,"title":"域名发散和域名收敛","slug":"域名发散和域名收敛","link":"#域名发散和域名收敛","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"javaScript/performance-optimization/dns-prefetch.md"}'),i={name:"javaScript/performance-optimization/dns-prefetch.md"},c=t("h1",{id:"dns-缓存和预解析",tabindex:"-1"},[o("DNS 缓存和预解析 "),t("a",{class:"header-anchor",href:"#dns-缓存和预解析","aria-hidden":"true"},"#")],-1),d=p('<p>Domain Name System 将域名和IP地址相互映射的一个分布式数据库。当用户在浏览器中输入网址的地址后，浏览器要做的第一件事就是解析 DNS。</p><h2 id="dns-解析过程" tabindex="-1">DNS 解析过程 <a class="header-anchor" href="#dns-解析过程" aria-hidden="true">#</a></h2><p>当用户输入 <code>ke.qq.com</code> 的时候，DNS的解析过程如下：</p><ol><li>查找浏览器缓存</li></ol><p>浏览器会检查缓存中有没有这个域名对应的解析过的IP地址，如果缓存中有，这个解析过程就将结束。</p><p>浏览器缓存域名也是有限制的，不仅浏览器缓存大小有限制，而且缓存的时间也有限制，通常情况下为几分钟到几小时不等。这个缓存时间太长和太短都不好，如果缓存时间太长，一旦域名被解析到的IP有变化，会导致被客户端缓存的域名无法解析到变化后的IP地址，以致该域名不能正常解析，这段时间内有可能会有一部分用户无法访问网站。如果时间设置太短，会导致用户每次访问网站都要重新解析一次域名。chrome 的时间只有 1 分钟。</p><ol start="2"><li>查找系统缓存</li></ol><p>如果用户的浏览器缓存中没有，浏览器会查找操作系统缓存中是否有这个域名对应的DNS解析结果。其实操作系统也会有一个域名解析的过程，在Windows中可以通过<code>C:\\Windows\\System32\\drivers\\etc\\hosts</code> 文件来设置，你可以将任何域名解析到任何能够访问的IP地址。如果你在这里指定了一个域名对应的IP地址，那么浏览器会首先使用这个IP地址。</p><p>例如，我们在测试时可以将一个域名解析到一台测试服务器上，这样不用修改任何代码就能测试到单独服务器上的代码的业务逻辑是否正确。正是因为有这种本地DNS解析的规程，所以黑客就有可能通过修改你的域名解析来把特定的域名解析到它指定的IP地址上，导致这些域名被劫持。</p><ol start="3"><li>查找路由器缓存</li></ol><p>果系统缓存中也找不到，那么查询请求就会发向路由器，它一般会有自己的DNS缓存。</p><ol start="4"><li>ISP（运营商）DNS 缓存</li></ol><p>运气实在不好，就只能查询ISP DNS 缓存服务器了。在我们的网络配置中都会有&quot;DNS服务器地址&quot;这一项，操作系统会把这个域名发送给这里设置的 DNS，也就是本地区的域名服务器，通常是提供给你接入互联网的应用提供商。</p><p>这个专门的域名解析服务器性能都会很好，它们一般都会缓存域名解析结果，当然缓存时间是受域名的失效时间控制的，一般缓存空间不是影响域名失效的主要因素。大约80%的域名解析都到这里就已经完成了，所以ISP DNS主要承担了域名的解析工作。</p><ol start="5"><li>递归</li></ol><p>最无奈的情况发生了, 在前面都没有办法命中的 DNS 缓存的情况下：</p><ul><li>本地 DNS 服务器即将该请求转发到互联网上的根域（即一个完整域名最后面的那个点，通常省略不写）。</li><li>根域将所要查询域名中的顶级域（假设要查询 <a href="http://ke.qq.com" target="_blank" rel="noreferrer">ke.qq.com</a>，该域名的顶级域就是 com）的服务器 IP 地址返回到本地 DNS。</li><li>本地 DNS 根据返回的IP地址，再向顶级域（就是 com 域）发送请求。</li><li>com 域服务器再将域名中的二级域（即 <a href="http://ke.qq.com" target="_blank" rel="noreferrer">ke.qq.com</a> 中的 qq）的 IP 地址返回给本地 DNS。</li><li>本地DNS再向二级域发送请求进行查询。</li><li>之后不断重复这样的过程，直到本地 DNS 服务器得到最终的查询结果，并返回到主机。</li></ul><p>这时候主机才能通过域名访问该网站。</p><h2 id="使用-dns-预解析" tabindex="-1">使用 DNS 预解析 <a class="header-anchor" href="#使用-dns-预解析" aria-hidden="true">#</a></h2><p>根据浏览器定义的规则，提前解析之后可能会用到的域名，使解析结果缓存到系统缓存中，缩短DNS解析时间，来提高网站的访问速度。</p><h3 id="配置-dns-预解析" tabindex="-1">配置 DNS 预解析 <a class="header-anchor" href="#配置-dns-预解析" aria-hidden="true">#</a></h3><ol><li>打开和关闭 DNS 解析</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- off 则是关闭 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-dns-prefetch-control</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><ol start="2"><li>自动解析</li></ol><p>Chromium 会自动解析 href 属性（a标签），该行为与用户浏览网页是并行的。但为了确保安全，HTTPS 页面不会自动解析。</p><ol start="3"><li>手动添加解析</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dns-prefetch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.google.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="看一下淘宝怎么使用-dns-预解析" tabindex="-1">看一下淘宝怎么使用 DNS 预解析 <a class="header-anchor" href="#看一下淘宝怎么使用-dns-预解析" aria-hidden="true">#</a></h3><p>DNS Prefetch 的原理就是在 HTTP 建立之前，将 DNS 查询的结果缓存到系统/浏览器中，提升网页的加载效率。</p><p>打开淘宝，看它的 link 标签，可以看到它的预解析列表：</p><p><img src="/fe-tutorial/assets/javascript-effective-dns.1388cba5.png" alt="dns prefetch"></p><h3 id="如何更好的使用" tabindex="-1">如何更好的使用 <a class="header-anchor" href="#如何更好的使用" aria-hidden="true">#</a></h3><ol><li><p>要有选择的进行 DNS 预解析，对哪些资源做手动 prefetch？例如静态资源域名、JS 里会发起跳转的域名和会重定向的域名</p></li><li><p>不用对超链接做手动prefetch，浏览器会自动做</p></li></ol><h3 id="域名发散和域名收敛" tabindex="-1">域名发散和域名收敛 <a class="header-anchor" href="#域名发散和域名收敛" aria-hidden="true">#</a></h3><ul><li>域名发散</li></ul><p>PC 端因为浏览器有域名并发请求限制（chrome 为 6 个），也就是同一时间，<strong>浏览器最多向同一个域名发送 6 个请求</strong>，因此 PC 端使用域名发散策略，将 http 静态资源放入多个域名/子域名中，以保证资源更快加载。常见的办法为使用 cdn。</p><p>为什么浏览器要做并发限制？</p><ol><li>以前的服务器负载能力差，流量大容易奔溃，所以为了保护服务器，浏览器做了单域名最大并发限制。</li><li>防止 DDOS 攻击，最基本的 DoS 攻击就是利用合理的服务请求来占用过多的服务资源，从而使合法用户无法得到服务的响应。如果不限制并发请求数量…</li></ol><ul><li>域名收敛</li></ul><p>就是尽量将静态资源只放在一个域名下面。</p><p>既然域名发散优点这么明显，那么域名收敛怎么来的？</p><p>上面说了是PC下使用域名发散，那么现在是移动互联网时代。PC上DNS解析消耗相对较小，但移动端（假设信号不够强）的 DNS 消耗是比较大的。所以，在增加域名的同时，会带来一定的DNS解析消耗，所以域名收敛能降低这个成本。</p><p>但是，单纯的靠域名收敛降低性能消耗的成本也很奇怪，本身单域名的并发问题还是存在。怎么处理，核心是解除最大连接数的限制，那么SPDY/HTTP2的多路复用功能就派上用场了</p><p>这两新协议对HTTP1.1做了不少的优化，核心是减少连接数，还有头部压缩、服务器推送，强制SSL安全协议等等</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://imweb.io/topic/55e3ba46771670e207a16bc8" target="_blank" rel="noreferrer">DNS 解析</a></li><li><a href="https://github.com/amandakelake/blog/issues/50" target="_blank" rel="noreferrer">【性能优化】DNS 预解析</a></li><li><a href="https://www.cnblogs.com/moqiutao/p/11079722.html" target="_blank" rel="noreferrer">浏览器 DNS 缓存与 DNS prefetch</a></li></ul>',46);const h=l(i,[["render",function(l,t,o,p,r,i){const h=a("VueJobs");return e(),s("div",null,[c,n(h),d])}]]);export{r as __pageData,h as default};
