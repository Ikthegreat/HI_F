import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView'
import StartView from '@/views/StartView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
