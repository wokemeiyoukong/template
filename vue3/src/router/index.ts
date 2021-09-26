import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
