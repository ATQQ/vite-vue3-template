import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import Dynamic from '@/pages/demos/dynamic/index.vue'
import VueUse from '@/pages/demos/vueuse/index.vue'

const NotFind = () => import('@/pages/404/index.vue')
const demosWrapper = () => import('@/pages/demos/index.vue')
const Axios = () => import('@/pages/demos/axios/index.vue')
const Element = () => import('@/pages/demos/element/index.vue')

const routes: RouteRecordRaw[] = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFind },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../../pages/AboutView.vue')
  },
  {
    path: '/demos',
    name: 'demos',
    component: demosWrapper,
    redirect: '/demos/element',
    children: [
      { path: 'element', component: Element, name: 'element' },
      { path: 'axios', component: Axios, name: 'axios' },
      { path: 'vueuse', component: VueUse, name: 'vueuse' },
      {
        path: 'dynamic/:id',
        component: Dynamic,
        meta: {
          requireLogin: false,
          isAdmin: true
        },
        name: 'dynamic'
      }
    ]
  }
]

export default routes
