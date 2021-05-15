import { createApp } from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'
import Axios from './apis/ajax'
import mountElementUI from './utils/elementUI'

document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App)

app.provide('$http', Axios)

app.use(router)
app.use(store)
mountElementUI(app)
app.mount('#app')
