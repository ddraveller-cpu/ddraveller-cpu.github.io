<script setup lang="ts">
import { computed } from 'vue'
import { getArticles } from '../data/articles'

const props = defineProps<{
  locale?: 'zh' | 'en'
}>()

const locale = computed(() => props.locale ?? 'zh')
const articles = computed(() => getArticles(locale.value).slice(0, 3))
const heading = computed(() => (locale.value === 'en' ? 'Featured Articles' : '精选文章'))
const intro = computed(() =>
  locale.value === 'en'
    ? 'A compact salon of paintings that changed how we understand color, light, and time.'
    : '像走进一间小型沙龙，从色彩、光线与时间里重新阅读经典。'
)
const allLink = computed(() => (locale.value === 'en' ? '/en/blog/' : '/blog/'))
const allText = computed(() => (locale.value === 'en' ? 'View all articles' : '查看全部文章'))
</script>

<template>
  <section class="featured-salon">
    <div class="section-kicker">Journal</div>
    <div class="featured-salon__header">
      <h2>{{ heading }}</h2>
      <p>{{ intro }}</p>
      <a :href="allLink">{{ allText }}</a>
    </div>

    <div class="featured-salon__grid">
      <a
        v-for="(article, index) in articles"
        :key="article.id"
        class="art-card"
        :class="{ 'art-card--large': index === 0 }"
        :href="article.link"
      >
        <span class="art-card__category">{{ article.category }}</span>
        <img :src="article.image" alt="" />
        <div class="art-card__body">
          <div class="art-card__meta">
            <span>{{ article.date }}</span>
            <span>{{ article.readTime }}</span>
          </div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.excerpt }}</p>
        </div>
      </a>
    </div>
  </section>
</template>
