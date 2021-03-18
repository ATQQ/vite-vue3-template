import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
import App from './App.vue'

document.title = import.meta.env.VITE_APP_TITLE as string

const app = createApp(App)
app.use(createRouter({
    history: createWebHistory(import.meta.env.VITE_ROUTER_BASE as string),
    routes,
}))
app.mount('#app')
