import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login', // 登录
    component: () => import('@/views/login')
  },
  {
    path: '/register',  // 注册
    component: () => import('@/views/login')
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    redirect: '/layout/home',
    children: [
      {
        path: 'home', // 首页
        component: () => import('@/views/Layout/home')
      },
      {
        path: 'type', // 产品分类
        component: () => import('@/views/Layout/type')
      },
      {
        path: 'user', // 个人中心
        component: () => import('@/views/Layout/user')
      },
      {
        path: '/details', // 公司详情
        component: () => import('@/views/Layout/details')
      },
      {
        path: '/collect', // 收藏
        component: () => import('@/views/Layout/collect')
      },
      {
        path: '/message', // 消息中心
        component: () => import('@/views/Layout/mc')
      },
      {
        path: '/policy', // 政策法规
        component: () => import('@/views/Layout/policy')
      },
    ]
  },
  {
    path: '/reg-success', // 注册成功
    component: () => import('@/views/Tips/reg')
  },
  {
    path: '/search', // 搜索页
    component: () => import('@/views/Layout/search')
  },
  {
    path: '/consult', // 我要咨询
    component: () => import('@/views/Layout/consult')
  },
  {
    path: '/log-out', // 注销
    component: () => import('@/views/Layout/logOut')
  },
  {
    path: '/add-business',  // 新增企业
    component: () => import('@/views/Layout/addBusiness')
  },
  {
    path: '*',  
    redirect: '/layout/home'
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