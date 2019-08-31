module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',

  // webpack alias
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },

  // base path
  base: '/docs/'
}