import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Art Blog',
  description: '在艺术、生活与技术之间寻找审美的秩序',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    logo: '/images/starry-night.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' }
    ],
    footer: {
      message: '“艺术洗去了灵魂中日常生活的灰尘。”',
      copyright: 'Pablo Picasso · Art Blog'
    },
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Art Blog',
      description: '在艺术、生活与技术之间寻找审美的秩序',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '博客', link: '/blog/' },
          { text: '关于', link: '/about' }
        ],
        outline: { label: '页面导航' },
        lastUpdated: { text: '最后更新' },
        docFooter: { prev: '上一篇', next: '下一篇' }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Art Blog',
      description: 'Finding aesthetic order between art, life, and technology',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Blog', link: '/en/blog/' },
          { text: 'About', link: '/en/about' }
        ],
        outline: { label: 'On this page' },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous', next: 'Next' },
        footer: {
          message: '“Art washes away from the soul the dust of everyday life.”',
          copyright: 'Pablo Picasso · Art Blog'
        }
      }
    }
  }
})
