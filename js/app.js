// Article data - Expanded with 6 articles
const articles = {
  1: {
    title: { zh: '梵高：燃烧的灵魂', en: 'Van Gogh: Burning Soul' },
    date: '2024-03-15',
    readTime: { zh: '8 分钟', en: '8 min' },
    tags: { zh: ['后印象派', '梵高', '艺术史'], en: ['Post-Impressionism', 'Van Gogh', 'Art History'] },
    image: 'images/starry-night.jpg',
    category: 'modern'
  },
  2: {
    title: { zh: '浮世绘的艺术魅力', en: 'The Art of Ukiyo-e' },
    date: '2024-03-10',
    readTime: { zh: '6 分钟', en: '6 min' },
    tags: { zh: ['浮世绘', '日本艺术', '葛饰北斋'], en: ['Ukiyo-e', 'Japanese Art', 'Hokusai'] },
    image: 'images/great-wave.jpg',
    category: 'eastern'
  },
  3: {
    title: { zh: '光影大师维米尔', en: 'Vermeer: Master of Light' },
    date: '2024-03-05',
    readTime: { zh: '7 分钟', en: '7 min' },
    tags: { zh: ['维米尔', '荷兰黄金时代', '光影'], en: ['Vermeer', 'Dutch Golden Age', 'Light'] },
    image: 'images/pearl-earring.jpg',
    category: 'classical'
  },
  4: {
    title: { zh: '达·芬奇的永恒之谜', en: 'Da Vinci: Eternal Mystery' },
    date: '2024-02-28',
    readTime: { zh: '10 分钟', en: '10 min' },
    tags: { zh: ['文艺复兴', '达·芬奇', '蒙娜丽莎'], en: ['Renaissance', 'Da Vinci', 'Mona Lisa'] },
    image: 'images/mona-lisa.jpg',
    category: 'classical'
  },
  5: {
    title: { zh: '米开朗基罗：神与人之间', en: 'Michelangelo: Between God and Man' },
    date: '2024-02-20',
    readTime: { zh: '9 分钟', en: '9 min' },
    tags: { zh: ['文艺复兴', '米开朗基罗', '西斯廷教堂'], en: ['Renaissance', 'Michelangelo', 'Sistine Chapel'] },
    image: 'images/creation-of-adam.jpg',
    category: 'modern'
  },
  6: {
    title: { zh: '克里姆特：金色梦境', en: 'Klimt: Golden Dreams' },
    date: '2024-02-15',
    readTime: { zh: '7 分钟', en: '7 min' },
    tags: { zh: ['维也纳分离派', '克里姆特', '象征主义'], en: ['Vienna Secession', 'Klimt', 'Symbolism'] },
    image: 'images/the-kiss.jpg',
    category: 'contemporary'
  },
};

// DOM Elements
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const backBtn = document.getElementById('backBtn');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a');

// Theme button click - toggle directly
themeBtn.addEventListener('click', () => {
  toggleTheme();
});

// Language button click - toggle directly
langBtn.addEventListener('click', () => {
  toggleLanguage();
});

// Blog category filtering
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filter blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'flex';
        card.style.animation = 'fadeInScale 0.4s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Navigation
function navigateTo(pageId) {
  // Hide all pages
  pages.forEach(page => page.classList.remove('active'));
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  // Update nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + pageId) {
      link.classList.add('active');
    }
  });
  // Scroll to top
  window.scrollTo(0, 0);
}

// Handle navigation clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('href').slice(1);
    navigateTo(pageId);
  });
});

// Blog card click - open article
document.querySelectorAll('.blog-card, .featured-card').forEach(card => {
  card.addEventListener('click', () => {
    const articleId = card.getAttribute('data-article');
    openArticle(articleId);
  });
});

// Open article
function openArticle(articleId) {
  const article = articles[articleId];
  if (!article) return;

  const content = document.getElementById('articleContent');
  const articleHero = document.getElementById('articleHero');
  const lang = currentLang;
  const contentKey = 'article' + articleId + 'Content';

  // Set hero background
  if (articleHero) {
    articleHero.style.backgroundImage = `url(${article.image})`;
  }

  content.innerHTML = `
    <div class="article-header">
      <div class="article-meta">
        <span>${article.date}</span>
        <span>${article.readTime[lang]}</span>
      </div>
      <h1>${article.title[lang]}</h1>
      <div class="article-tags">
        ${article.tags[lang].map(tag => `<span>${tag}</span>`).join('')}
      </div>
    </div>
    <div class="article-body">
      <p>${i18n[lang][contentKey].replace(/\n\n/g, '</p><p>')}</p>
    </div>
  `;

  navigateTo('article');
}

// Back button
backBtn.addEventListener('click', () => {
  navigateTo('blog');
});

// Initialize active states
document.addEventListener('DOMContentLoaded', () => {
  // Set initial nav active
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#home') {
      link.classList.add('active');
    }
  });
});

// Handle browser back/forward
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1) || 'home';
  navigateTo(hash);
});

// Initial navigation based on hash
const initialHash = window.location.hash.slice(1);
if (initialHash && document.getElementById(initialHash)) {
  navigateTo(initialHash);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});