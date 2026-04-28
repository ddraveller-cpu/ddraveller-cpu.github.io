<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  locale?: 'zh' | 'en'
}>()

const copy = computed(() => {
  if (props.locale === 'en') {
    return {
      eyebrow: 'Art · Life · Thoughts',
      title: 'Finding Balance\nBetween Code and Brush',
      subtitle: 'Explore the stories behind world-famous paintings and feel the power of art across time and space.',
      primary: 'Explore Blog',
      secondary: 'About Me',
      primaryLink: '/en/blog/',
      secondaryLink: '/en/about',
      note: 'Curated essays on masterpieces, museums, and the visual culture of everyday life.'
    }
  }

  return {
    eyebrow: '艺术 · 生活 · 思考',
    title: '在代码与画笔之间\n寻找平衡',
    subtitle: '探索世界名画背后的故事，感受艺术跨越时空的力量。',
    primary: '探索博客',
    secondary: '关于我',
    primaryLink: '/blog/',
    secondaryLink: '/about',
    note: '以策展人的节奏，记录名画、博物馆与日常审美。'
  }
})
</script>

<template>
  <section class="gallery-hero">
    <div class="gallery-hero__media" aria-hidden="true">
      <img src="/images/starry-night.jpg" alt="" />
    </div>
    <div class="gallery-hero__veil" aria-hidden="true" />
    <div class="gallery-hero__frame" aria-hidden="true" />

    <div class="gallery-hero__content">
      <p class="gallery-hero__eyebrow">{{ copy.eyebrow }}</p>
      <h1>{{ copy.title }}</h1>
      <p class="gallery-hero__subtitle">{{ copy.subtitle }}</p>
      <div class="gallery-hero__actions">
        <a class="luxury-button luxury-button--primary" :href="copy.primaryLink">{{ copy.primary }}</a>
        <a class="luxury-button luxury-button--ghost" :href="copy.secondaryLink">{{ copy.secondary }}</a>
      </div>
    </div>

    <aside class="gallery-hero__note">
      <span>Art Blog</span>
      <p>{{ copy.note }}</p>
    </aside>
  </section>
</template>
