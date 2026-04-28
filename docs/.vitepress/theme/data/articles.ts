export interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  image: string
  category: string
  link: string
}

export const zhArticles: Article[] = [
  {
    id: 1,
    title: '梵高：燃烧的灵魂',
    excerpt: '文森特·梵高用短暂而炽热的生命，为世界留下了无数珍贵的艺术遗产。',
    date: '2024-03-15',
    readTime: '8 分钟',
    tags: ['后印象派', '梵高', '艺术史'],
    image: '/images/starry-night.jpg',
    category: '现代艺术',
    link: '/blog/van-gogh-burning-soul'
  },
  {
    id: 2,
    title: '浮世绘的艺术魅力',
    excerpt: '浮世绘以精美线条和鲜明色彩记录江户时代的浮世风景，也深刻影响了西方现代艺术。',
    date: '2024-03-10',
    readTime: '6 分钟',
    tags: ['浮世绘', '日本艺术', '葛饰北斋'],
    image: '/images/great-wave.jpg',
    category: '东方艺术',
    link: '/blog/ukiyoe-art'
  },
  {
    id: 3,
    title: '光影大师维米尔',
    excerpt: '维米尔以近乎静默的光线，让日常空间拥有了穿透时间的诗意。',
    date: '2024-03-05',
    readTime: '7 分钟',
    tags: ['维米尔', '荷兰黄金时代', '光影'],
    image: '/images/pearl-earring.jpg',
    category: '古典艺术',
    link: '/blog/vermeer-master-of-light'
  },
  {
    id: 4,
    title: '达·芬奇的永恒之谜',
    excerpt: '从蒙娜丽莎的微笑到飞行器草图，达·芬奇把艺术、科学与想象力织成同一张网。',
    date: '2024-02-28',
    readTime: '10 分钟',
    tags: ['文艺复兴', '达·芬奇', '蒙娜丽莎'],
    image: '/images/mona-lisa.jpg',
    category: '古典艺术',
    link: '/blog/da-vinci-eternal-mystery'
  },
  {
    id: 5,
    title: '米开朗基罗：神与人之间',
    excerpt: '米开朗基罗在神圣叙事与人的身体之间，雕刻出文艺复兴最强烈的精神张力。',
    date: '2024-02-20',
    readTime: '9 分钟',
    tags: ['文艺复兴', '米开朗基罗', '西斯廷教堂'],
    image: '/images/creation-of-adam.jpg',
    category: '现代艺术',
    link: '/blog/michelangelo-between-god-and-man'
  },
  {
    id: 6,
    title: '克里姆特：金色梦境',
    excerpt: '克里姆特用金箔、图案与象征主义，创造出华丽又带着危险感的梦。',
    date: '2024-02-15',
    readTime: '7 分钟',
    tags: ['维也纳分离派', '克里姆特', '象征主义'],
    image: '/images/the-kiss.jpg',
    category: '当代艺术',
    link: '/blog/klimt-golden-dreams'
  }
]

export const enArticles: Article[] = [
  {
    id: 1,
    title: 'Van Gogh: Burning Soul',
    excerpt: 'Vincent van Gogh left the world an incandescent artistic legacy through a short and passionate life.',
    date: '2024-03-15',
    readTime: '8 min',
    tags: ['Post-Impressionism', 'Van Gogh', 'Art History'],
    image: '/images/starry-night.jpg',
    category: 'Modern Art',
    link: '/en/blog/van-gogh-burning-soul'
  },
  {
    id: 2,
    title: 'The Art of Ukiyo-e',
    excerpt: 'Ukiyo-e captured Edo life with exquisite lines and vivid color, then reshaped the imagination of Western modern art.',
    date: '2024-03-10',
    readTime: '6 min',
    tags: ['Ukiyo-e', 'Japanese Art', 'Hokusai'],
    image: '/images/great-wave.jpg',
    category: 'Eastern Art',
    link: '/en/blog/ukiyoe-art'
  },
  {
    id: 3,
    title: 'Vermeer: Master of Light',
    excerpt: 'Vermeer gave domestic rooms a silent radiance that still feels suspended outside ordinary time.',
    date: '2024-03-05',
    readTime: '7 min',
    tags: ['Vermeer', 'Dutch Golden Age', 'Light'],
    image: '/images/pearl-earring.jpg',
    category: 'Classical Art',
    link: '/en/blog/vermeer-master-of-light'
  },
  {
    id: 4,
    title: 'Da Vinci: Eternal Mystery',
    excerpt: 'From Mona Lisa’s smile to flying-machine sketches, Da Vinci fused art, science, and imagination.',
    date: '2024-02-28',
    readTime: '10 min',
    tags: ['Renaissance', 'Da Vinci', 'Mona Lisa'],
    image: '/images/mona-lisa.jpg',
    category: 'Classical Art',
    link: '/en/blog/da-vinci-eternal-mystery'
  },
  {
    id: 5,
    title: 'Michelangelo: Between God and Man',
    excerpt: 'Michelangelo carved the Renaissance tension between sacred narrative and the human body.',
    date: '2024-02-20',
    readTime: '9 min',
    tags: ['Renaissance', 'Michelangelo', 'Sistine Chapel'],
    image: '/images/creation-of-adam.jpg',
    category: 'Modern Art',
    link: '/en/blog/michelangelo-between-god-and-man'
  },
  {
    id: 6,
    title: 'Klimt: Golden Dreams',
    excerpt: 'Klimt used gold leaf, pattern, and symbolism to build dreams that are opulent, intimate, and slightly dangerous.',
    date: '2024-02-15',
    readTime: '7 min',
    tags: ['Vienna Secession', 'Klimt', 'Symbolism'],
    image: '/images/the-kiss.jpg',
    category: 'Contemporary Art',
    link: '/en/blog/klimt-golden-dreams'
  }
]

export function getArticles(locale: 'zh' | 'en'): Article[] {
  return locale === 'en' ? enArticles : zhArticles
}
