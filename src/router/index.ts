import Home from '../pages/home/index.vue'
import About from '../pages/about/index.vue'
import Dynamic from '../pages/dynamic/index.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/404/index.vue') },
    {
        path: '/', name: 'index',
        component: () => import('../pages/index/index.vue'),
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About },
            { path: 'dynamic/:id', component: Dynamic },
        ]
    },
]


export default routes