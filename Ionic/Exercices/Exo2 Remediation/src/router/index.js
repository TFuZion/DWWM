import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add-item',
      name: 'add-item',
      component: () => import('../components/AddItem.vue')
    },
    {
      path: '/inventory-list',
      name: 'inventory-list',
      component: () => import('../components/InventoryList.vue')
    },
    {
      path: '/item-detail:id',
      name: 'item-detail',
      component: () => import('../components/ItemDetails.vue')
    }
  ]
})

export default router