import { createApp } from 'vue'
import App from './App.vue'

document.title = import.meta.env.VITE_APP_TITLE as string

createApp(App).mount('#app')
