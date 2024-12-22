import { createRouter, createWebHistory } from 'vue-router'

import routes from '@/router/routes/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
