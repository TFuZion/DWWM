import { createRouter, createWebHistory } from 'vue-router'
import HistoriqueView from '@/views/HistoriqueView.vue'
import AddView from '@/views/AddView.vue'
import TTDView from '@/views/TTDView.vue'
import HomePageView from '@/views/HomePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePageView
    },
    {
      path: '/historique',
      name: 'historique',
      component: HistoriqueView
    },
    {
      path: '/add',
      name: 'add',
      component: AddView
    },
    {
      path: '/ttdepense',
      name: 'ttdepense',
      component: TTDView
    }
  ]
})

export default router
