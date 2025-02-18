import { createApp } from 'vue'

import App from './App.vue'
import appUse from '@/utils/use'
import components from './components'

import './assets/variables.css'
import './assets/main.css'

const app = createApp(App)

appUse(app)
components(app)

app.mount('#app')
