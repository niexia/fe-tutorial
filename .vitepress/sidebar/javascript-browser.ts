function getBrowserSidebar() {
  return [
    {
      text: '浏览器工作原理',
      items: [
        {
          text: '浏览器进程和线程',
          link: '/javascript/browser/',
        },
        {
          text: '渲染过程',
          link: '/javascript/browser/render-process',
        },
        {
          text: '事件循环 Event Loop',
          link: '/javascript/browser/event-loop',
        },
        {
          text: '栈空间和堆空间',
          link: '/the-beauty-of-design-patterns/heap-stack',
        },
        {
          text: '垃圾回收',
          link: '/javascript/browser/garbage-collection',
        }
      ]
    },
  ]
}

export {
  getBrowserSidebar
}