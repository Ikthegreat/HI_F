import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuesax from 'vuesax'
import VueSweetalert2 from 'vue-sweetalert2'

import 'vuesax/dist/vuesax.css'
import 'boxicons/css/boxicons.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'

import vueCookies from "vue-cookies"

Vue.use(BootstrapVue)

Vue.use(vueCookies)

Vue.use(VueSweetalert2)

Vue.$cookies.config("3d")

Vue.use(Vuesax, {
  icons: {
    iconfont: 'bx',
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

