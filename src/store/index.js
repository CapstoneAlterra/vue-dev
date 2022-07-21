
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import offlineclass from './offlineclass';
import category from './category'
import classname from './classname'
import trainer from './trainer'
import onlineclass from "./onlineclass";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    users: [],
    content: [],
    token: null,
    membership: [],
  },
  getters: {
  },
  mutations: {
    loginSucces(state, token) {
      state.token = token
    },
    setUsers(state, playload) {
      state.users = playload;
    },
    setContent(state, playload) {
      state.content = playload;
    },
    setMembership(state, playload) {
      state.membership = playload;
    },
    logout(state) {
      state.token = null
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
        .catch((error) => {console.log(error)
        })
    },
    getMembership(store) {
      axios
        .get(`https://62d457765112e98e484e3952.mockapi.io/membership`)
        .then((response) => {store.commit('setMembership', response.data)
        })
        .catch((error) => {console.log(error)
        })
    },
  },
    modules: {
      offlineclass,
      category,
      classname,
      trainer,
      onlineclass
    }
})
