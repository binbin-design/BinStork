import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BinStork",
  description: "Be cheerful and hopeful",
  head:[
    ['link',{rel:'icon',href:'/images/logo.png'}], 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Code', link: '/Code/index' },
      { text: 'Server', link: '/Server/index' },
      { text: 'Design', link: '/Design/index' },
      { text: 'APP', link: '/APP/index' },
      { text: 'Book', link: '/Book/index' },
      { text: 'Video', link: '/Video/index' },
      { text: 'Other', link: '/Other/index' },
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
