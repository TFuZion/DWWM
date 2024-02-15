import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import AddMem from '@/components/AddMem.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/add-mem',
    name: 'add-mem',
    component: AddMem
  },
  {
    path: '/memory-list',
    name: 'memory-list',
    component: () => import('../components/MemoryList.vue')
  },
  {
    path: '/mem-detail:id',
    name: 'mem-detail',
    component: () => import('../components/MemDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
