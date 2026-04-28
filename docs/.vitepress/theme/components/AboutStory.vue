<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  locale?: 'zh' | 'en'
}>()

const content = computed(() => {
  if (props.locale === 'en') {
    return {
      title: 'About Me',
      tagline: 'Finding my expression between art and technology',
      storyTitle: 'My Story',
      story: [
        'I first encountered art at the age of ten. My father took me to an Impressionist exhibition at the provincial museum. Monet’s Water Lilies made me feel for the first time how colors could flow and be so full of life.',
        'In college, I chose computer science. I studied code during the day and buried myself in art history books at night. The rigorous logic of code and the free expression of art became two sides of the same coin.',
        'After graduation, I became a front-end engineer, but art has always been the habitat of my soul. This blog documents my ongoing journey through museums, masterworks, and visual culture.'
      ],
      philosophyTitle: 'Art Philosophy',
      philosophies: [
        ['Art as Language', 'A painting can transcend thousands of years to have a silent dialogue with viewers.'],
        ['Technology as Tool', 'AI, VR, and generative art are redefining the boundaries of creation.'],
        ['Aesthetics as Life', 'Beauty should move through daily life, from coffee foam to city architecture.']
      ],
      timelineTitle: 'Art Journey',
      timeline: [
        ['2010', 'First Encounter', 'Provincial museum Impressionist exhibition, meeting Monet’s Water Lilies.'],
        ['2015', 'Starting to Copy', 'Systematically learning sketching and watercolor, copying Van Gogh and Cézanne.'],
        ['2019', 'European Journey', 'Louvre, Uffizi, Prado—witnessing masterworks in person.'],
        ['2023', 'Creating Blog', 'Starting to record and share art learning experiences.']
      ],
      contactTitle: 'Contact Me',
      contact: 'If you are also passionate about art or have ideas to share, feel free to reach out.'
    }
  }

  return {
    title: '关于我',
    tagline: '在艺术与技术之间寻找自己的表达方式',
    storyTitle: '我的故事',
    story: [
      '初次遇见艺术，是在十岁那年。父亲带我去省博物馆看了一次印象派画展，莫奈的《睡莲》让我第一次感受到色彩可以如此流动、如此有生命力。',
      '大学时我选择了计算机专业，白天学习代码，晚上泡在图书馆看艺术史。代码的严谨逻辑与艺术的自由表达，其实是同一枚硬币的两面。',
      '毕业后我成为了一名前端工程师，但艺术始终是我灵魂的栖息地。这个博客记录我在博物馆、名画与视觉文化中的探索。'
    ],
    philosophyTitle: '艺术理念',
    philosophies: [
      ['艺术即语言', '一幅画作可以跨越千年的时空，与观者进行无声的对话。'],
      ['技术为工具', 'AI、VR、生成艺术正在重新定义艺术的边界。'],
      ['审美即生活', '美不应只存在于博物馆，也应流动在咖啡、建筑与日常细节中。']
    ],
    timelineTitle: '艺术足迹',
    timeline: [
      ['2010', '初次邂逅', '省博物馆印象派画展，遇见莫奈的《睡莲》。'],
      ['2015', '开始临摹', '系统学习素描与水彩，临摹梵高、塞尚作品。'],
      ['2019', '欧洲之旅', '卢浮宫、乌菲兹、普拉多——亲眼见证大师真迹。'],
      ['2023', '创建博客', '开始系统性地记录和分享艺术学习心得。']
    ],
    contactTitle: '与我联系',
    contact: '如果你也对艺术充满热情，或者有任何想法想要交流，欢迎联系我。'
  }
})
</script>

<template>
  <section class="about-museum">
    <div class="about-museum__hero">
      <div>
        <p class="section-kicker">Atelier</p>
        <h1>{{ content.title }}</h1>
        <p>{{ content.tagline }}</p>
      </div>
      <img src="/images/birth-of-venus.jpg" alt="Birth of Venus detail" />
    </div>

    <div class="about-museum__story">
      <h2>{{ content.storyTitle }}</h2>
      <p v-for="paragraph in content.story" :key="paragraph">{{ paragraph }}</p>
    </div>

    <div class="about-museum__philosophy">
      <h2>{{ content.philosophyTitle }}</h2>
      <div class="philosophy-grid">
        <article v-for="item in content.philosophies" :key="item[0]">
          <span />
          <h3>{{ item[0] }}</h3>
          <p>{{ item[1] }}</p>
        </article>
      </div>
    </div>

    <div class="about-museum__timeline">
      <h2>{{ content.timelineTitle }}</h2>
      <article v-for="item in content.timeline" :key="item[0]">
        <time>{{ item[0] }}</time>
        <div>
          <h3>{{ item[1] }}</h3>
          <p>{{ item[2] }}</p>
        </div>
      </article>
    </div>

    <div class="about-museum__gallery" aria-label="Artwork gallery">
      <img src="/images/last-supper.jpg" alt="The Last Supper" />
      <img src="/images/mona-lisa.jpg" alt="Mona Lisa" />
      <img src="/images/the-kiss.jpg" alt="The Kiss" />
    </div>

    <div class="about-museum__contact">
      <h2>{{ content.contactTitle }}</h2>
      <p>{{ content.contact }}</p>
      <p class="about-museum__contact-note">Art Blog</p>
    </div>
  </section>
</template>
