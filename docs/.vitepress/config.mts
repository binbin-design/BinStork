import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BinStork",
  description: "一条路的终点，是另一条路的起点",
  head:[
    ['link',{rel:'icon',href:'/images/logo.png'}], 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      { text: '编程', link: '/Code/index' },
      { text: '服务器', link: '/Server/index' },
      { text: '设计', link: '/Design/index' },
      { text: '应用', link: '/APP/index' },
      { text: '书籍', link: '/Book/index' },
      { text: '视频', link: '/Video/index' },
      { text: '其他', link: '/Other/index' },
    ],
    sidebar: {
      '/Code/': [
        {
          text: '编程',
          collapsed: false,
          items: [
            { text: '前言', link: '/Code/index' },
            { text: 'PHP', link: '/Code/php/index' },
          ]
        }
      ],
      '/Server/': [
        {
          text: '服务器',
          collapsed: false,
          items: [
            { text: '前言', link: '/Server/index' },
          ]
        }
      ],
      '/Design/': [
        {
          text: '设计',
          collapsed: false,
          items: [
            { text: '前言', link: '/Design/index' },
          ]
        }
      ],
      '/APP/': [
        {
          text: '应用',
          collapsed: false,
          items: [
            { text: '前言', link: '/APP/index' },
          ]
        }
      ],
      '/Book/': [
        {
          text: '书籍',
          collapsed: false,
          items: [
            { text: '前言', link: '/Book/index' },
          ]
        }
      ],
      '/Video/': [
        {
          text: '视频',
          collapsed: false,
          items: [
            { text: '前言', link: '/Video/index' },
          ]
        }
      ],
      '/Other/': [
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: '前言', link: '/Other/index' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/binbin-design?tab=repositories' }
    ],
    search: {
        provider: 'local'
    },
    footer: {
        message: 'Binstork',
        copyright: 'Copyright © 2025-present Evan You'
    }
  }
})