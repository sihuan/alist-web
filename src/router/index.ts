import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'Admin',
    // redirect: '/admin/info',
    component: () => import('../views/admin/Index.vue'),
    children:[
      {
        path: '/admin/info',
        name: 'Info',
        component: () => import('../views/admin/Info.vue')
      },
      {
        path: '/admin/drive',
        name: 'Drive',
        component: () => import('../views/admin/Drive.vue')
      },
      {
        path: '/admin/setting',
        name: 'Setting',
        component: () => import('../views/admin/Setting.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/:path(.*)*',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
