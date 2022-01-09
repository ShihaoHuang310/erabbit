import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ path: '/', component: Home }],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
