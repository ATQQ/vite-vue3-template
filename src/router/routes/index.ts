import Home from '../../pages/home/index.vue'
import About from '../../pages/about/index.vue'
import Dynamic from '../../pages/dynamic/index.vue'
import { RouteRecordRaw } from 'vue-router'

const NotFind = () => import('../../pages/404/index.vue')
const Index = () => import('../../pages/index/index.vue')
const Axios = () => import('../../pages/axios/index.vue')

const routes: RouteRecordRaw[] = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFind },
    {
        path: '/', name: 'index',
        component: Index,
        children: [
            { path: 'home', component: Home, name: 'home' },
            { path: 'about', component: About, name: 'about' },
            { path: 'axios', component: Axios, name: 'axios' },
            {
                path: 'dynamic/:id', component: Dynamic,
                meta: {
                    requireLogin: false,
                    isAdmin: true
                },
                name: 'dynamic'
            },
        ]
    },
]

export default routes