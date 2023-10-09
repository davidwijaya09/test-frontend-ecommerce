import { createRouter, createWebHistory } from 'vue-router'
import Delivery from '../views/DeliveryDetailsPage.vue'
import Payment from '../views/PaymentPage.vue'
import summaryPage from '../views/SummaryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: Delivery
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/summaryPage',
      name: 'summaryPage',
      component: summaryPage
    },

  ]
})

export default router
