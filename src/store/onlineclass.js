import Vue from 'vue'

import axios from 'axios'

Vue.use(axios)

const state = () => ({
    onlinekelasList: [],
})
const mutations = {
    setonlinekelas(state, param) {
        state.onlinekelasList = param
    }
}
const actions = {
    fetchonlinekelasList(store) {
        axios.get("https://gym-capstone.hasura.app/api/rest/onlineclass").then((response) => {
            store.commit("setonlinekelas", response.data.class)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}