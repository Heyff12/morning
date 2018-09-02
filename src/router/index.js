import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import ("@/pages/login")
const Pager = () => import ("@/pages/paper")
const PagerD = () => import ("@/pages/paper/detail")
const PagerOver = () => import ("@/pages/paperover")
const PagerOverD = () => import ("@/pages/paperover/detail")

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
        path: "/",
        name: "pager",
        component: Pager
    },
    //登录页
    { path: "/login", name: "login", meta: { auth: false }, component: Login },
    {
      path: '/page/detail/:id',
      name: 'pageD',
      component: PagerD
    },
    {
      path: '/pageover',
      name: 'pageover',
      component: PagerOver
    },
    {
      path: '/pageover/detail/:id',
      name: 'pageoverD',
      component: PagerOverD
    }
  ]
})
