import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'orders',
      component: () => import('../pages/ordersList.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../pages/orderView.vue')
    }
  ]
})
