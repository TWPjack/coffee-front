import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import(/* webpackChunkName: "terms" */ '../views/Terms.vue')
  },
  {
    path: '/qna',
    name: 'Qna',
    component: () => import(/* webpackChunkName: "qna" */ '../views/Qna.vue')
  },
  {
    path: '/produtcsdetail',
    name: 'ProdutcsDetail',
    component: () => import(/* webpackChunkName: "produtcsdetail" */ '../views/ProdutcsDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
