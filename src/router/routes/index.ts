import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import Dynamic from '@/pages/dashboard/dynamic/index.vue'

const NotFind = () => import('@/pages/404/index.vue')
const DashboardWrapper = () => import('@/pages/dashboard/index.vue')
const Axios = () => import('@/pages/dashboard/axios/index.vue')
const Element = () => import('@/pages/dashboard/element/index.vue')

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
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardWrapper,
    children: [
      { path: 'axios', component: Axios, name: 'axios' },
      { path: 'element', component: Element, name: 'element' },
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
