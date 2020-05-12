module.exports = {
  title: 'fe-tutorial',
  description: '前端学习笔记',
  head: [
    ['link', {
      rel: 'icon', 
      href: '/favicon.ico'
    }],
    ['script', {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=UA-163994034-1"
    }],
    ['script', {}, 
      `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-163994034-1');
      `
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  base: '/fe-tutorial/',
  themeConfig: {
    repo: 'niexias/fe-tutorial',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      { text: '数据结构和算法', link: '/algo/' },
      { text: '网络协议', link: '/network/' },
      { text: 'JavaScript', link: '/javaScript/' },
      { text: '前端工程化', link: '/fee/' },
      { text: '个人博客', link: 'https://niexias.github.io/' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/algo/': [
        {
          title: '数据结构和算法',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '介绍'],
            '数组/数组',
            '链表/链表',
            '链表/手写链表的技巧',
            '栈/栈',
            '递归/递归',
            ['排序/排序', '排序算法介绍'],
            '排序/冒泡、插入和选择排序',
            '排序/归并排序和快速排序',
            '排序/桶排序、计数排序和基数排序',
            '排序/排序优化',
            '二分查找/二分查找',
            '二分查找/二分查找的变形',
            '跳表/跳表',
            '散列表/散列表',
            '哈希算法/哈希算法',
            '二叉树/二叉树',
            '二叉树/二叉查找树',
            '二叉树/红黑树',
            '堆/堆和堆排序',
            '堆/堆的应用',
            '图/图',
            '图/深度和广度优先搜索',
            '字符串匹配/BF算法和RK算法',
            '字符串匹配/BM算法',
            '字符串匹配/KMP算法',
            'Tire树/Tire树',
            '贪心算法/贪心算法',
            '分治算法/分治算法',
            '回溯算法/回溯算法',
            '动态规划/动态规划'
          ]
        },
        {
          title: 'LeetCode',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'leetcode/数组',
            'leetcode/链表',
            'leetcode/队列',
          ]
        },
      ],
      '/network/': [{
        title: 'network',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['', '介绍'],
          'http',
          'https',
          'UPD和TCP',
          'get和post的区别'
        ]
      }, ],
      '/javaScript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '介绍'],
            '执行环境和执行栈',
            '作用域和闭包',
            'this',
            '对象、原型和原型链',
            '实现继承',
            '实现new',
            '实现call,apply和bind',
            '实现instanceof',
            '深拷贝和浅拷贝',
            '节流函数和防抖函数',
            '高阶函数',
            '函数柯里化',
            'EventEmitter',
            '实现Promise',
            '实现异步打印',
            '数组去重,扁平化和最值',
            '数组乱序',
            '懒加载',
            '无限滚动',
            '虚拟滚动'
          ]
        },
        {
          title: 'RegExp',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'RegExp/正则表达式',
            'RegExp/RegExp的属性和方法',
            'RegExp/应用'
          ]
        },
        {
          title: '浏览器工作原理',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'browser/浏览器的多进程和JS单线程',
            'browser/浏览器渲染过程',
            'browser/EventLoop',
            'browser/栈空间和堆空间',
            'browser/垃圾回收',
          ]
        },
        {
          title: '性能优化',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'effective/性能优化',
            'effective/DNS缓存和预解析',
            'effective/减少请求次数和体积',
            'effective/利用缓存',
            'effective/CDN',
            'effective/浏览器渲染机制和优化',
          ]
        }
      ],
      '/fee/': [
        {
          title: 'git',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'git/'
          ]
        }, {
          title: 'webpack',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'webpack/介绍',
            'webpack/初识webpack',
            'webpack/webpack核心概念',
            // 'webpack/从入门到真实项目配置',
            // 'webpack/vue-cli2中的配置说明',
            'webpack/优化'
          ]
        }, {
          title: '工程化',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'engineering/如何配置git提交规范',
          ]
        }
      ],
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true]
  ]
}