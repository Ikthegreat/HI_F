import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.use(Vuesax, {
  icons: {
    iconfont: 'lg',
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
