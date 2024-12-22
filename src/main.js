import { createApp } from 'vue'

import App from './App.vue'
import appUse from '@/utils/use'

import './assets/tailwind.css'
import TheIcon from './components/common/TheIcon.vue'

const app = createApp(App)

appUse(app)

app.component('Icon', TheIcon)

app.mount('#app')
