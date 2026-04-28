import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import AboutStory from './components/AboutStory.vue'
import ArticleGrid from './components/ArticleGrid.vue'
import FeaturedArticles from './components/FeaturedArticles.vue'
import HomeHero from './components/HomeHero.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AboutStory', AboutStory)
    app.component('ArticleGrid', ArticleGrid)
    app.component('FeaturedArticles', FeaturedArticles)
    app.component('HomeHero', HomeHero)
  }
} satisfies Theme
