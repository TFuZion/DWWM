import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MemoriesListPage from '@/views/MemoriesListPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    name: 'memories',
    component: MemoriesListPage
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/MemoryAddPage.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/MemoryDetailsPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
