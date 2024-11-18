import pinia from '@/stores'
import router from '@/router'
import { initSentry } from '@/utils/sentry'

function appUse(app) {
  app.use(router)
  app.use(pinia)
  initSentry(app)
}

export default appUse
