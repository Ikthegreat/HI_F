import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'


const Server_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    token: null
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    LOG_IN(state, token) {
      state.token = token
    },
    LOG_OUT(state) {
      state.token = null
    }
  },
  actions: {
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: `${Server_URL}/accounts/signup/`,
        data: {
          username, password1, password2
        }
      }).then(result => {
        context.commit('LOG_IN', result.data.key)
        router.push('/')
      }).catch(error => {
        console.log(error.response.data)
      })
    },
    logIn(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${Server_URL}/accounts/login/`,
        data: {
          username, password
        }
      }).then(result => {
        context.commit('LOG_IN', result.data.key)
        router.push('/')
      }).catch(error => {
        console.log(error)
      })
    },
    logOut(context) {
      context.commit('LOG_OUT')
    }
  },
  modules: {
  }
})

