import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/clothing',
    component: () => import('../views/Clothing.vue')
  },
  {
    path: '/shoes',
    component: () => import('../views/Shoes.vue')
  },
  {
    path: '/accessories',
    component: () => import('../views/Accessories.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
