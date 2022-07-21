import Vue from 'vue'

import axios from 'axios'

Vue.use(axios)

const state = () => ({
    kelasList: [],
})
const mutations = {
    setkelas(state, param) {
        state.kelasList = param
    }
}
const actions = {
    fetchList(store) {
        axios.get("https://gym-capstone.hasura.app/api/rest/offlineclass").then((response) => {
            store.commit("setkelas", response.data.class)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}