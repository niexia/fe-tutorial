function getPerformanceOptimizationSideBar () {
  return [
    {
      text: '性能优化',
      items: [
        {
          text: '介绍',
          link: '/javascript/performance-optimization/',
        },
        {
          text: '配置 DNS 预加载',
          link: '/javascript/performance-optimization/dns-prefetch',
        },
        {
          text: '减少请求次数和体积',
          link: '/javascript/performance-optimization/reduce-the-number-and-size-of-requests',
        },
        {
          text: '利用缓存',
          link: '/javascript/performance-optimization/using-cache',
        },
        {
          text: '使用 CDN',
          link: '/javascript/performance-optimization/cdn',
        },
        {
          text: '浏览器的渲染机制和优化渲染过程',
          link: '/javascript/performance-optimization/rendering-mechanisms-and-optimization',
        }
      ]
    },
  ]
}

export {
  getPerformanceOptimizationSideBar
}