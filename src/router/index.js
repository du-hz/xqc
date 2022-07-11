import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home')
  },
  {
    path: '/type',
    component: () => import('@/views/type')
  },
  {
    path: '/enterprise',
    component: () => import('@/views/enterprise')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

// export const constantRoutes = [
//   ...routes
// ]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  // routes: constantRoutes
  routes
})

// const router = createRouter()

export default router