
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    users: [],
    content: [],
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
    setUsers(state, playload) {
      state.users = playload;
    },
    setContent(state, playload) {
      state.content = playload;
    },
  },
  actions: {
    getUsers(store) {
      axios
        .get(`https://62d457765112e98e484e3952.mockapi.io/users?p=1&l=10`)
        .then((response) => {store.commit('setUsers', response.data)
        })
        .catch((error) => {console.log(error)
        })
    },
    getContent(store) {
      axios
        .get(`https://62d457765112e98e484e3952.mockapi.io/content`)
        .then((response) => {store.commit('setContent', response.data)
        })
        .catch((error) => {console.log(error, "test")
        })
    },
  },
  modules: {
  }
})
