function getNetworkSideBar () {
  return [
    {
      text: '开始',
      items: [
        {
          text: '计算机网络基础',
          link: '/network/',
        },
        {
          text: 'http',
          link: '/network/http',
        },
        {
          text: 'https',
          link: '/network/https',
        },
      ]
    },
    {
      text: 'Q&A',
      items: [
        {
          text: 'get 和 post 区别',
          link: '/network/get-post',
        }
      ]
    }
  ]
}

export {
  getNetworkSideBar
}