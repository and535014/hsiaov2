import * as Sentry from '@sentry/vue'

export function initSentry(app) {
  if (!import.meta.env.VITE_SENTRY_DSN || import.meta.env.DEV) {
    return
  }
  console.log('init sentry')
  Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [Sentry.browserTracingIntegration()],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
  })
}
