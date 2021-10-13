import Vue from 'vue'
import VueRouter from 'vue-router'

import withComponent from '../components/hoc/withComponent'

// 일괄 로딩, 일단 전부 다 로딩
import Daily from '../views/Daily.vue' // 메인페이지는 지연로딩 안해도 됨
// import Days from '../views/Days.vue'

// 지연 로딩, 볼때마다 로딩
// const Daily = () => import('../views/Daily.vue')
const Days = () => import('../views/Days.vue')
const Posts = () => import('../views/PostsCp.vue')
const Users = () => import('../views/UsersCp.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Daily',
    component: Daily
  },
  {
    path: '/5days',
    name: 'Days',
    component: Days
  },
  {
    path: '/users',
    name: 'Users',
    component: withComponent(Users)('https://jsonplaceholder.typicode.com/users')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: withComponent(Posts)('https://jsonplaceholder.typicode.com/posts')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router