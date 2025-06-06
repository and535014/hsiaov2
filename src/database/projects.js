export const PROJECT_LIST = [
  {
    id: 1,
    title: 'Crystal Apple 電商平台',
    subtitle: 'BJD 娃娃配件的電商平台，具有 RWD 且使用 SPA，擁有基本的商品列表、購物車等功能。',
    description:
      '因為家裡的娃娃的東西太多，一直想找個方法來好好的管理這些東西。之前有嘗試過用 Notion 來整理，不過 Notion 在排版上還是有一些限制，所以不是很方便。後來就想說不然把娃娃的東西整理後製作成購物網站吧！既可以分類查找還可以很好的展示幫娃娃們拍的照片，因此就有了這個作品。雖然現在東西還很少，之後會努力繼續新增內容以及擴充功能。',

    tags: ['Vue.js', 'Vue-CLI', 'Vuex', 'Vue-router', 'Bootstrap', 'Sass', 'Pug'],
    cover: '/img/projects/1/cover.png',
    url: 'https://and535014.github.io/ca-shop/',
    github: 'https://github.com/and535014/ca-shop',
    images: [
      {
        path: '/img/projects/1/pic01.png',
        thumbnail: '/img/projects/1/pic01_small.png',
        order: 1,
      },
      {
        path: '/img/projects/1/pic02.png',
        thumbnail: '/img/projects/1/pic02_small.png',
        order: 2,
      },
      {
        path: '/img/projects/1/pic03.png',
        thumbnail: '/img/projects/1/pic03_small.png',
        order: 3,
      },
      {
        path: '/img/projects/1/pic04.png',
        thumbnail: '/img/projects/1/pic04_small.png',
        order: 4,
      },
    ],
    video: null,
    content: {
      features: [
        '使用 Vue.js 開發',
        '使用 Vuex 做狀態統一管理',
        '使用 Vue-router 製作 SPA 頁面',
        '使用 Sass 建構響應式版型',
      ],
      functions: ['主視覺輪播區', '商品列表頁', '商品細節頁', '購物車'],
    },
  },
  {
    id: 2,
    title: 'Twitter search app',
    subtitle: '一個可以在過去七天的推文中搜尋並取得符合關鍵字推文(不包含轉推)的小工具。',
    description: '',
    content: {
      features: [
        '使用 Vue.js 開發',
        '使用 Vuex 做狀態統一管理',
        '使用 Nuxt.js 製作 SSR 頁面',
        '使用 Sass 建構響應式版型',
      ],
      functions: ['Twitter API v2 串接', '關鍵字搜尋區', '搜尋結果區'],
    },
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'API 串接', 'Sass', 'Pug'],
    cover: '/img/projects/2/cover.png',
    url: null,
    github: 'https://github.com/and535014/twitter-search',
    images: [
      {
        path: '/img/projects/2/pic01.png',
        thumbnail: '/img/projects/2/pic01_small.png',
        order: 1,
      },
      {
        path: '/img/projects/2/pic02.png',
        thumbnail: '/img/projects/2/pic02_small.png',
        order: 2,
      },
    ],
    video:
      'https://player.vimeo.com/video/741423524?h=386b62dc78&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
]
