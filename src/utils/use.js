import pinia from '@/stores'
import router from '@/router'
import zh from '@/assets/locales/zh'
import en from '@/assets/locales/en'

import { createI18n } from 'vue-i18n'
import { initSentry } from '@/utils/sentry'

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: { zh, en },
})

function appUse(app) {
  app.use(router)
  app.use(pinia)
  app.use(i18n)
  initSentry(app)
}

export default appUse
