// Translations
const i18n = {
  zh: {
    // Navigation
    navHome: '首页',
    navBlog: '博客',
    navAbout: '关于',
    themeLight: '明亮',
    themeDark: '黑暗',
    themeSystem: '系统',
    
    // Hero Section
    heroTagline: '艺术 · 生活 · 思考',
    heroTitle: '在代码与画笔之间\n寻找平衡',
    heroSubtitle: '探索世界名画背后的故事，感受艺术跨越时空的力量',
    exploreBlog: '探索博客',
    aboutMe: '关于我',
    scrollHint: '向下滚动',
    
    // Featured Section
    featuredTitle: '精选文章',
    viewAllArticles: '查看全部文章 →',
    tagPostImpressionism: '后印象派',
    tagUkiyoe: '浮世绘',
    tagLight: '光影',
    
    // Blog Page
    blogTitle: '博客文章',
    blogSubtitle: '探索艺术史、鉴赏名画、分享艺术感悟',
    catAll: '全部',
    catClassical: '古典艺术',
    catModern: '现代艺术',
    catEastern: '东方艺术',
    catContemporary: '当代艺术',
    backToBlog: '返回博客',
    
    // Read Times
    readTime6: '6 分钟',
    readTime7: '7 分钟',
    readTime8: '8 分钟',
    readTime9: '9 分钟',
    readTime10: '10 分钟',
    
    // Article 1: Van Gogh
    article1Title: '梵高：燃烧的灵魂',
    article1Excerpt: '文森特·梵高，这位荷兰后印象派画家，用他短暂而炽热的生命，为世界留下了无数珍贵的艺术遗产。他的《星月夜》中旋转的星空，是他内心激情的具象化表达。',
    article1Content: `文森特·梵高，这位荷兰后印象派画家，用他短暂而炽热的生命，为世界留下了无数珍贵的艺术遗产。

《星月夜》创作于1889年，是梵高在圣雷米精神病院期间的作品。画面中旋转的星空、起伏的山峦、宁静的村庄，构成了一幅充满动感的夜景。那些漩涡状的星云，仿佛是他内心激情的具象化表达。

梵高的一生充满了苦难与挣扎，但他从未放弃对艺术的追求。在阿尔勒的黄色小屋中，他创作了大量杰作。他的笔触粗犷有力，色彩浓烈奔放，每一幅画都仿佛在燃烧着他的生命。

"我梦想着绘画，我画着我的梦想。"——文森特·梵高

梵高生前只卖出过一幅画，但他留下的作品却影响了无数后来的艺术家。他让我们明白，真正的艺术不在于商业价值，而在于能否触动人心。`,
    
    // Article 2: Ukiyo-e
    article2Title: '浮世绘的艺术魅力',
    article2Excerpt: '浮世绘是日本江户时代兴起的一种独特的艺术形式，以其精美的线条和鲜明的色彩闻名于世。葛饰北斋的《神奈川冲浪里》至今仍是日本文化的标志性符号。',
    article2Content: `浮世绘是日本江户时代兴起的一种独特的艺术形式，以其精美的线条和鲜明的色彩闻名于世。

葛饰北斋的《神奈川冲浪里》是浮世绘最著名的作品之一。画面中巨大的海浪仿佛要吞噬一切，而远处的富士山却岿然不动，形成强烈的对比。这种对自然力量的描绘，体现了日本人对自然的敬畏。

浮世绘不仅影响了日本本土的艺术发展，更对西方的印象派画家产生了深远的影响。梵高的作品中就能看到浮世绘的影子，他曾多次临摹浮世绘作品，并将其融入自己的创作中。

浮世绘的"浮世"二字，意为"尘世"或"现世"，表达了及时行乐的人生态度。这种艺术形式记录了江户时代市民生活的方方面面，是了解日本历史文化的珍贵资料。`,
    
    // Article 3: Vermeer
    article3Title: '光影大师维米尔',
    article3Excerpt: '约翰内斯·维米尔是荷兰黄金时代最伟大的画家之一，他以其对光线的精妙处理而闻名。《戴珍珠耳环的少女》被誉为"北方的蒙娜丽莎"。',
    article3Content: `约翰内斯·维米尔是荷兰黄金时代最伟大的画家之一，他以其对光线的精妙处理而闻名。

《戴珍珠耳环的少女》被誉为"北方的蒙娜丽莎"。画中少女回眸的瞬间，那神秘的目光仿佛能穿透时空，与观者进行无声的对话。珍珠耳环在暗色背景中闪烁着柔和的光芒，成为整幅画的焦点。

维米尔的作品数量稀少，但每一幅都是精品。他善于运用暗箱技术，创造出独特的光影效果。他的画作中，光线仿佛有了生命，静静地流淌在画面之中。

维米尔对色彩的运用也极为讲究。他常常使用昂贵的群青颜料，这种从青金石中提取的蓝色，赋予了他的作品独特的魅力。`,
    
    // Article 4: Da Vinci
    article4Title: '达·芬奇的永恒之谜',
    article4Excerpt: '列奥纳多·达·芬奇是文艺复兴时期最杰出的代表之一。《蒙娜丽莎》那神秘的微笑，数百年来一直吸引着无数观众和艺术史学家。',
    article4Content: `列奥纳多·达·芬奇是文艺复兴时期最杰出的代表之一。《蒙娜丽莎》那神秘的微笑，数百年来一直吸引着无数观众和艺术史学家。

这幅画作于1503年至1519年间，是达·芬奇最具代表性的作品。画中女子的微笑若隐若现，不同的角度、不同的光线，都会给人不同的感受。这种"渐隐法"技法的运用，使得画面产生了神秘的氛围。

达·芬奇不仅是一位画家，还是科学家、发明家、解剖学家。他的笔记本中充满了各种奇思妙想，许多设计在当时看来简直是天方夜谭，但在今天却成为了现实。直升机、坦克、机器人的雏形，都能在他的笔记中找到。

《蒙娜丽莎》现藏于巴黎卢浮宫，每年吸引着数百万游客前来瞻仰。她的微笑，将永远是艺术史上最迷人的谜题。`,
    
    // Article 5: Michelangelo
    article5Title: '米开朗基罗：神与人之间',
    article5Excerpt: '米开朗基罗·博那罗蒂，文艺复兴三杰之一，他的作品《创世纪》和《大卫》至今仍是人类艺术史上的巅峰之作。',
    article5Content: `米开朗基罗·博那罗蒂，文艺复兴三杰之一，他的作品《创世纪》和《大卫》至今仍是人类艺术史上的巅峰之作。

西斯廷教堂天顶画《创世纪》是米开朗基罗最具代表性的作品。这幅巨大的壁画描绘了《圣经》中创世纪的故事，其中最著名的一幕是《创造亚当》——上帝的手指即将触碰亚当的手指，生命之火即将传递。

米开朗基罗花了四年时间完成这幅作品，期间他几乎一直仰着头作画，导致颈椎受损。但他从未抱怨，因为他相信自己在为上帝创作。

《大卫》雕像则是另一件杰作。这尊高达5.17米的大理石雕像展现了圣经英雄大卫的形象。米开朗基罗选择了大卫即将与歌利亚战斗前的瞬间，展现了他的决心与勇气。`,
    
    // Article 6: Klimt
    article6Title: '克里姆特：金色梦境',
    article6Excerpt: '古斯塔夫·克里姆特，维也纳分离派的代表人物，他的作品以金色装饰和象征主义风格著称。《吻》是他最负盛名的作品。',
    article6Content: `古斯塔夫·克里姆特，维也纳分离派的代表人物，他的作品以金色装饰和象征主义风格著称。

《吻》是克里姆特最负盛名的作品。画中一对恋人在金色的花海中相拥，他们的身体被华丽的金色图案包裹，仿佛融为一体。这幅画作充满了装饰性和象征意义，展现了克里姆特独特的艺术语言。

克里姆特的作品常常涉及爱、性和死亡等主题。他用金色的叶子、几何图案和象征性的形象，创造出一个梦幻般的世界。他的作品既有拜占庭镶嵌艺术的华丽，又有现代主义的简洁。

克里姆特的艺术对后来的装饰艺术和现代设计产生了深远的影响。他让我们看到，艺术可以是华丽的、装饰的，同时也能表达深刻的情感和思想。`,
    
    // About Page
    aboutTitle: '关于我',
    aboutTagline: '在艺术与技术之间寻找自己的表达方式',
    storyTitle: '我的故事',
    storyP1: '初次遇见艺术，是在十岁那年。父亲带我去省博物馆看了一次印象派画展，莫奈的《睡莲》让我第一次感受到色彩可以如此流动、如此有生命力。那一刻，我知道自己的人生将与艺术结下不解之缘。',
    storyP2: '大学时我选择了计算机专业，白天学习代码，晚上泡在图书馆看艺术史。看似矛盾的两者，在我心中却奇妙地融合。代码的严谨逻辑与艺术的自由表达，其实是同一枚硬币的两面——都是人类创造力的体现。',
    storyP3: '毕业后我成为了一名前端工程师，但艺术始终是我灵魂的栖息地。每个周末，我都会去美术馆、画廊，或是在家中临摹大师作品。去年，我开始系统性地学习艺术史，并创建了这个博客，记录我的艺术探索之旅。',
    philosophyTitle: '艺术理念',
    philosophy1Title: '艺术即语言',
    philosophy1Text: '艺术是人类最原始也最精妙的表达方式。一幅画作可以跨越千年的时空，与观者进行无声的对话。',
    philosophy2Title: '技术为工具',
    philosophy2Text: '数字时代赋予我们全新的创作工具。AI、VR、生成艺术——技术正在重新定义艺术的边界。',
    philosophy3Title: '审美即生活',
    philosophy3Text: '艺术不应只在博物馆里，它应该融入日常。从一杯咖啡的拉花到城市建筑的线条，美无处不在。',
    timelineTitle: '艺术足迹',
    timeline1Title: '初次邂逅',
    timeline1Text: '省博物馆印象派画展，遇见莫奈的《睡莲》',
    timeline2Title: '开始临摹',
    timeline2Text: '系统学习素描与水彩，临摹梵高、塞尚作品',
    timeline3Title: '欧洲之旅',
    timeline3Text: '卢浮宫、乌菲兹、普拉多——亲眼见证大师真迹',
    timeline4Title: '创建博客',
    timeline4Text: '开始系统性地记录和分享艺术学习心得',
    galleryTitle: '我的作品',
    contactTitle: '与我联系',
    contactText: '如果你也对艺术充满热情，或者有任何想法想要交流，欢迎通过以下方式联系我。',
    
    // Footer
    footerQuote: '"艺术洗去了灵魂中日常生活的灰尘。"',
    footerAuthor: '—— 巴勃罗·毕加索',
  },
  
  en: {
    // Navigation
    navHome: 'Home',
    navBlog: 'Blog',
    navAbout: 'About',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System',
    
    // Hero Section
    heroTagline: 'Art · Life · Thoughts',
    heroTitle: 'Finding Balance\nBetween Code and Brush',
    heroSubtitle: 'Explore the stories behind world-famous paintings, feel the power of art across time and space',
    exploreBlog: 'Explore Blog',
    aboutMe: 'About Me',
    scrollHint: 'Scroll Down',
    
    // Featured Section
    featuredTitle: 'Featured Articles',
    viewAllArticles: 'View All Articles →',
    tagPostImpressionism: 'Post-Impressionism',
    tagUkiyoe: 'Ukiyo-e',
    tagLight: 'Light',
    
    // Blog Page
    blogTitle: 'Blog Articles',
    blogSubtitle: 'Explore art history, appreciate masterpieces, share artistic insights',
    catAll: 'All',
    catClassical: 'Classical',
    catModern: 'Modern',
    catEastern: 'Eastern',
    catContemporary: 'Contemporary',
    backToBlog: 'Back to Blog',
    
    // Read Times
    readTime6: '6 min',
    readTime7: '7 min',
    readTime8: '8 min',
    readTime9: '9 min',
    readTime10: '10 min',
    
    // Article 1: Van Gogh
    article1Title: 'Van Gogh: Burning Soul',
    article1Excerpt: 'Vincent van Gogh, the Dutch Post-Impressionist painter, left countless precious artistic legacies to the world with his short and passionate life.',
    article1Content: `Vincent van Gogh, the Dutch Post-Impressionist painter, left countless precious artistic legacies to the world with his short and passionate life.

"The Starry Night" was created in 1889 during Van Gogh's stay at the Saint-Paul-de-Mausole asylum. The swirling sky, rolling hills, and quiet village form a dynamic night scene. Those spiral nebulae seem to be the concrete expression of his inner passion.

Van Gogh's life was full of suffering and struggle, but he never gave up his pursuit of art. In the Yellow House in Arles, he created numerous masterpieces. His brushstrokes are bold and powerful, his colors intense and unrestrained—each painting seems to be burning with his life.

"I dream of painting, and then I paint my dream." — Vincent van Gogh

Van Gogh only sold one painting during his lifetime, but his works have influenced countless later artists. He taught us that true art lies not in commercial value, but in its ability to touch hearts.`,
    
    // Article 2: Ukiyo-e
    article2Title: 'The Art of Ukiyo-e',
    article2Excerpt: 'Ukiyo-e is a unique art form that emerged during Japan\'s Edo period, renowned worldwide for its exquisite lines and vivid colors.',
    article2Content: `Ukiyo-e is a unique art form that emerged during Japan's Edo period, renowned worldwide for its exquisite lines and vivid colors.

Katsushika Hokusai's "The Great Wave off Kanagawa" is one of the most famous ukiyo-e works. The massive wave in the painting seems to swallow everything, while Mount Fuji in the distance remains unmoved, creating a strong contrast. This depiction of natural power reflects the Japanese reverence for nature.

Ukiyo-e not only influenced the development of Japanese art but also had a profound impact on Western Impressionist painters. Van Gogh's works show the influence of ukiyo-e—he copied ukiyo-e works many times and incorporated them into his own creations.

The term "ukiyo" means "floating world" or "secular world," expressing a carpe diem attitude toward life. This art form recorded various aspects of Edo period civilian life and is precious material for understanding Japanese history and culture.`,
    
    // Article 3: Vermeer
    article3Title: 'Vermeer: Master of Light',
    article3Excerpt: 'Johannes Vermeer was one of the greatest painters of the Dutch Golden Age, renowned for his exquisite treatment of light.',
    article3Content: `Johannes Vermeer was one of the greatest painters of the Dutch Golden Age, renowned for his exquisite treatment of light.

"Girl with a Pearl Earring" is known as the "Mona Lisa of the North." The moment the girl turns her head, that mysterious gaze seems to penetrate time and space, engaging in a silent dialogue with the viewer. The pearl earring shines with soft light against the dark background, becoming the focal point of the entire painting.

Vermeer's works are few in number, but each one is a masterpiece. He was skilled at using the camera obscura technique to create unique lighting effects. In his paintings, light seems to have life, flowing quietly through the canvas.

Vermeer was also extremely particular about color. He often used expensive ultramarine pigment, a blue extracted from lapis lazuli, which gave his works unique charm.`,
    
    // Article 4: Da Vinci
    article4Title: 'Da Vinci: Eternal Mystery',
    article4Excerpt: 'Leonardo da Vinci was one of the most outstanding representatives of the Renaissance period. The mysterious smile of the Mona Lisa has attracted countless viewers.',
    article4Content: `Leonardo da Vinci was one of the most outstanding representatives of the Renaissance period. The mysterious smile of the Mona Lisa has attracted countless viewers and art historians for hundreds of years.

This painting was created between 1503 and 1519 and is Da Vinci's most representative work. The woman's smile is elusive—different angles and different lighting give different impressions. The use of the "sfumato" technique creates a mysterious atmosphere in the painting.

Da Vinci was not only a painter but also a scientist, inventor, and anatomist. His notebooks were filled with various ingenious ideas. Many designs seemed like fantasies at the time, but have become reality today. The prototypes of helicopters, tanks, and robots can all be found in his notes.

The Mona Lisa is now housed in the Louvre in Paris, attracting millions of visitors each year. Her smile will always be the most enchanting mystery in art history.`,
    
    // Article 5: Michelangelo
    article5Title: 'Michelangelo: Between God and Man',
    article5Excerpt: 'Michelangelo Buonarroti, one of the three giants of the Renaissance, created masterpieces like The Creation of Adam and David.',
    article5Content: `Michelangelo Buonarroti, one of the three giants of the Renaissance, created masterpieces like "The Creation of Adam" and "David" that remain pinnacles of human artistic achievement.

The Sistine Chapel ceiling painting "The Creation of Adam" is Michelangelo's most representative work. This enormous fresco depicts stories from Genesis in the Bible. The most famous scene shows the moment when God's finger is about to touch Adam's finger, transferring the spark of life.

Michelangelo spent four years completing this work, painting almost continuously with his head tilted back, which damaged his cervical spine. But he never complained, for he believed he was creating for God.

The "David" statue is another masterpiece. This 5.17-meter marble statue depicts the biblical hero David. Michelangelo chose the moment before David's battle with Goliath, showing his determination and courage.`,
    
    // Article 6: Klimt
    article6Title: 'Klimt: Golden Dreams',
    article6Excerpt: 'Gustav Klimt, representative of the Vienna Secession, is famous for his golden decorations and symbolic style.',
    article6Content: `Gustav Klimt, representative of the Vienna Secession, is famous for his golden decorations and symbolic style.

"The Kiss" is Klimt's most renowned work. In the painting, a pair of lovers embrace in a sea of golden flowers, their bodies wrapped in gorgeous golden patterns, seemingly merging into one. This painting is full of decorative and symbolic meaning, showing Klimt's unique artistic language.

Klimt's works often deal with themes of love, sexuality, and death. He creates a dreamlike world using golden leaves, geometric patterns, and symbolic imagery. His works have both the magnificence of Byzantine mosaic art and the simplicity of modernism.

Klimt's art has had a profound influence on later decorative art and modern design. He shows us that art can be gorgeous and decorative while also expressing deep emotions and thoughts.`,
    
    // About Page
    aboutTitle: 'About Me',
    aboutTagline: 'Finding my expression between art and technology',
    storyTitle: 'My Story',
    storyP1: 'I first encountered art at the age of ten. My father took me to an Impressionist exhibition at the provincial museum. Monet\'s "Water Lilies" made me feel for the first time how colors could flow and be so full of life. At that moment, I knew my life would be intertwined with art.',
    storyP2: 'In college, I chose computer science. I studied code during the day and buried myself in art history books at night. These seemingly contradictory pursuits merged wonderfully in my mind. The rigorous logic of code and the free expression of art are two sides of the same coin—both manifestations of human creativity.',
    storyP3: 'After graduation, I became a front-end engineer, but art has always been the habitat of my soul. Every weekend, I visit museums, galleries, or copy master works at home. Last year, I began systematically studying art history and created this blog to document my artistic exploration journey.',
    philosophyTitle: 'Art Philosophy',
    philosophy1Title: 'Art as Language',
    philosophy1Text: 'Art is the most primitive and exquisite form of human expression. A painting can transcend thousands of years to have a silent dialogue with viewers.',
    philosophy2Title: 'Technology as Tool',
    philosophy2Text: 'The digital age gives us new creative tools. AI, VR, generative art—technology is redefining the boundaries of art.',
    philosophy3Title: 'Aesthetics as Life',
    philosophy3Text: 'Art should not exist only in museums; it should be part of daily life. From latte art to city architecture, beauty is everywhere.',
    timelineTitle: 'Art Journey',
    timeline1Title: 'First Encounter',
    timeline1Text: 'Provincial museum Impressionist exhibition, meeting Monet\'s "Water Lilies"',
    timeline2Title: 'Starting to Copy',
    timeline2Text: 'Systematically learning sketching and watercolor, copying Van Gogh and Cézanne',
    timeline3Title: 'European Journey',
    timeline3Text: 'Louvre, Uffizi, Prado—witnessing masterworks in person',
    timeline4Title: 'Creating Blog',
    timeline4Text: 'Starting to systematically record and share art learning experiences',
    galleryTitle: 'My Works',
    contactTitle: 'Contact Me',
    contactText: 'If you are also passionate about art or have any ideas to share, feel free to contact me through the following channels.',
    
    // Footer
    footerQuote: '"Art washes away from the soul the dust of everyday life."',
    footerAuthor: '— Pablo Picasso',
  },
};

// Current language
let currentLang = localStorage.getItem('lang') || 'zh';

// Language icon SVGs
const langIcons = {
  zh: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  en: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" opacity="0.3"/><text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor" stroke="none">EN</text>'
};

// Update language icon
function updateLangIcon() {
  const langIcon = document.getElementById('langIcon');
  if (langIcon) {
    langIcon.innerHTML = langIcons[currentLang];
  }
}

// Update all i18n elements
function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      // Handle multiline text
      const text = i18n[currentLang][key];
      if (text.includes('\n')) {
        el.innerHTML = text.replace(/\n/g, '<br>');
      } else {
        el.textContent = text;
      }
    }
  });
  updateLangIcon();
  
  // Update article content if on article page
  const articleContent = document.getElementById('articleContent');
  if (articleContent && articleContent.innerHTML.trim() !== '') {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('article') || 
                      document.querySelector('.blog-card[data-article]')?.getAttribute('data-article');
    if (articleId && typeof openArticle === 'function') {
      // Re-render current article with new language
      const backBtn = document.getElementById('backBtn');
      if (backBtn) {
        // We're on article page
        const currentArticleCard = document.querySelector(`[data-article="${articleId}"]`);
        if (currentArticleCard) {
          openArticle(articleId);
        }
      }
    }
  }
}

// Set language
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateLanguage();
}

// Toggle language between zh and en
function toggleLanguage() {
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  setLang(newLang);
}

// Initialize
updateLanguage();