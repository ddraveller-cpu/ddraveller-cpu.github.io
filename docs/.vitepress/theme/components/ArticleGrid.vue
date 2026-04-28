<script setup lang="ts">
import { computed, ref } from 'vue'
import { getArticles } from '../data/articles'

const props = defineProps<{
  locale?: 'zh' | 'en'
}>()

const locale = computed(() => props.locale ?? 'zh')
const activeCategory = ref('all')
const articles = computed(() => getArticles(locale.value))
const categories = computed(() => {
  const labels = articles.value.map((article) => article.category)
  return ['all', ...Array.from(new Set(labels))]
})
const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') {
    return articles.value
  }

  return articles.value.filter((article) => article.category === activeCategory.value)
})
const allLabel = computed(() => (locale.value === 'en' ? 'All' : '全部'))
</script>

<template>
  <section class="article-archive">
    <div class="article-archive__filters" aria-label="Article categories">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        :aria-pressed="activeCategory === category"
        :class="{ active: activeCategory === category }"
        @click="activeCategory = category"
      >
        {{ category === 'all' ? allLabel : category }}
      </button>
    </div>

    <p class="sr-only" aria-live="polite">
      {{ filteredArticles.length }} {{ locale === 'en' ? 'articles shown' : '篇文章' }}
    </p>

    <div class="article-archive__grid">
      <a v-for="article in filteredArticles" :key="article.id" class="archive-card" :href="article.link">
        <img :src="article.image" alt="" />
        <div class="archive-card__content">
          <div class="archive-card__meta">
            <span>{{ article.category }}</span>
            <span>{{ article.date }}</span>
          </div>
          <h2>{{ article.title }}</h2>
          <p>{{ article.excerpt }}</p>
          <div class="archive-card__tags">
            <span v-for="tag in article.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
