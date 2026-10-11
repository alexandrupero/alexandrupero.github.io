import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import App from '@/App.vue'
import '@/icons'
import '@/assets/css/tailwind.css'

const app = createApp(App)

// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', Icon)
app.mount('#app')
