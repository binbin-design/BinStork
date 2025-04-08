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
      { text: '实际', link: '/Design/index' },
      { text: '应用', link: '/APP/index' },
      { text: '书籍', link: '/Book/index' },
      { text: '视频', link: '/Video/index' },
      { text: '其他', link: '/Other/index' },
    ],
    sidebar: {
      '/Code/': [
        {
          text: 'Code',
          collapsed: false,
          items: [
            { text: 'Preface', link: '/Code/index' },
          ]
        }
      ],
      '/Server/': [
        {
          text: 'Server',
          collapsed: false,
          items: [
            { text: 'Preface', link: '/Server/index' },
          ]
        }
      ],
      '/Design/': [
        {
          text: 'Design',
          collapsed: false,
          items: [
            { text: 'Preface', link: '/Design/index' },
          ]
        }
      ],
      '/APP/': [
        {
          text: 'APP',
          collapsed: false,
          items: [
            { text: 'Preface', link: '/APP/index' },
          ]
        }
      ],
      '/Book/': [
        {
          text: 'Book',
          collapsed: false,
          items: [
            { text: 'Preface', link: '/Book/index' },
          ]
        }
      ],
      '/Video/': [
        {
          text: 'Video',
          collapsed: false,
          items: [
            { text: 'Preface', link: '/Video/index' },
          ]
        }
      ],
      '/Other/': [
        {
          text: 'Other',
          collapsed: false,
          items: [
            { text: 'Preface', link: '/Other/index' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/binbin-design?tab=repositories' }
    ]
  }
})