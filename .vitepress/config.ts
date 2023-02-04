import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import { jobsPlugin } from './jobsMdPlugin'
import sideBar from './sidebar'

const nav: ThemeConfig['nav'] = [
  {
    text: 'JavaScript',
    activeMatch: `^/(javascript|browser|performance-optimization|regexp)/`,
    items: [
      {
        text: "JavaScript",
        link: '/javascript/programming-language/'
      },
      {
        text: "浏览器工作原理",
        link: '/javascript/browser/'
      },
      {
        text: "性能优化",
        link: '/javascript/performance-optimization/'
      },
      {
        text: "regexp",
        link: '/javascript/regexp/'
      },
    ]
  },
  {
    text: '数据结构和算法',
    activeMatch: `^/algo/`,
    link: '/algo/'
  },
  {
    text: '计算机网络',
    activeMatch: `^/network/`,
    link: '/network/'
  },
  {
    text: '前端工程化',
    activeMatch: `^/frontend-engineering/`,
    link: '/frontend-engineering/'
  },
  {
    text: 'Blog',
    link: 'https://niexia.github.io/'
  },
]

export const sidebar: ThemeConfig['sidebar'] = sideBar

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-US',
  title: 'fe tutorial',
  description: 'fe tutorial - 前端学习笔记',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  base: '/fe-tutorial/',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@niexia' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'icon', href: '/favicon.ico'}],
    ['script', {
      async: 'true',
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
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/niexia/' },
    ],

    editLink: {
      repo: 'niexia/fe-tutorial',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2019-${new Date().getFullYear()} Yang Jin`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin).use(jobsPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
