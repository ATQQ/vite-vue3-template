import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../../pages/HomeView.vue'

import Home from '../../pages/home/index.vue'
import About from '../../pages/about/index.vue'
import Dynamic from '../../pages/dynamic/index.vue'

const NotFind = () => import('../../pages/404/index.vue')
const Index = () => import('../../pages/index/index.vue')
const Axios = () => import('../../pages/axios/index.vue')
const Element = () => import('../../pages/element/index.vue')
const routes: RouteRecordRaw[] = [
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
    component: Index,
    children: [
      { path: 'home', component: Home, name: 'home-children' },
      { path: 'about', component: About, name: 'about-children' },
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
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFind }
]

export default routes
