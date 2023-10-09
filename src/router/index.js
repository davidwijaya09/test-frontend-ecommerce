import { createRouter, createWebHistory } from 'vue-router'
import Delivery from '../views/DeliveryDetailsPage.vue'
import Payment from '../views/PaymentPage.vue'
import Summary from '../views/Summary.vue'

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
    // {
    //   path: '/summary',
    //   name: 'Summary',
    //   component: Summary
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
