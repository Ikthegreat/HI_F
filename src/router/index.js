import Vue from 'vue'
import VueRouter from 'vue-router'
import StartView from '@/views/StartView'
import MainView from '@/views/MainView'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import LogOutView from '@/views/LogOutView'
import ProfileView from '@/views/ProfileView'
import MovieDetailView from '@/views/MovieDetailView'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    meta: { requiresAuth: true },
  },
  {
    path: '/start',
    name: 'start',
    component: StartView,
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
    meta: { requiresAuth: false },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
    meta: { requiresAuth: false },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOutView,
    meta: { requiresAuth: true },
  },
  {
    path: '/movie/:movieid',
    component: MovieDetailView,
    meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth && !store.getters.isLogin) {
    // 로그인이 필요한 페이지인데 로그인 상태가 아닐 때
    next('/start') // 로그인 페이지로 이동
    alert('로그인이 필요한 페이지입니다.')
  } else if (!to.meta.requiresAuth && store.getters.isLogin) {
    // 로그인 상태에서 로그인 페이지에 접근할 때
    next('/') // 메인 페이지로 이동
  } else {
    next() // 다음 라우트로 이동
  }
})

export default router
