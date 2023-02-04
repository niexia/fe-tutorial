function getFrontendEngineeringSideBar () {
  return [
    {
      text: '开始',
      items: [
        {
          text: '什么是前端工程化',
          link: '/frontend-engineering/',
        },
      ]
    },
    {
      text: '代码管理 git',
      items: [
        {
          text: '关于版本控制',
          link: '/frontend-engineering/git/about',
        },
        {
          text: '配置提交规范',
          link: '/frontend-engineering/git/config',
        }
      ]
    },
    {
      text: '构建工具 webpack',
      items: [
        {
          text: '关于构建工具',
          link: '/frontend-engineering/webpack/about-build-tool',
        },
        {
          text: 'webpack',
          link: '/frontend-engineering/webpack/start',
        },
        {
          text: '核心概念',
          link: '/frontend-engineering/webpack/concept',
        },
        {
          text: '运行机制',
          link: '/frontend-engineering/webpack/mechanism',
        }
      ]
    },
  ]
}

export {
  getFrontendEngineeringSideBar
}