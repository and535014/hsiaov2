import LayoutView from '@/views/LayoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    redirect: '/about',
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: {
          title: '關於我',
        },
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/ProjectsView.vue'),
        meta: {
          title: '專案作品',
        },
      },
      {
        path: 'projects/:id',
        name: 'project-detail',
        component: () => import('@/views/ProjectDetail.vue'),
      },
      {
        path: 'playground',
        name: 'playground',
        component: () => import('@/views/PlaygroundView.vue'),
        meta: {
          title: '互動區',
        },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta: {
          title: '聯絡方式',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'all',
    redirect: '/',
  },
]

export default routes
