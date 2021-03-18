import { createApp } from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'

document.title = import.meta.env.VITE_APP_TITLE as string

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
