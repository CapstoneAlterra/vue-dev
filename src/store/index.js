import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: null,
  },
  getters: {
  },
  mutations: {
    loginSucces(state, token) {
      state.token = token
    },
    logout(state){
      state.token = null
    },
  },
  actions: {
  },
  modules: {
  }
})