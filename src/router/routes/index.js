import LayoutView from '@/views/LayoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    redirect: '/other',
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
        path: 'others',
        name: 'others',
        component: () => import('@/views/OthersView.vue'),
        meta: {
          title: '其他',
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
