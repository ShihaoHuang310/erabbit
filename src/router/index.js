import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
// import Login from '@/views/Login/index.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/Category/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
