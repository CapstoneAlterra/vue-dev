import Vue from 'vue'

import axios from 'axios'

Vue.use(axios)

const state = () => ({
    trainerList: [],
})
const mutations = {
    setTrainer(state, param) {
        state.trainerList = param
    }
}
const actions = {
    fetchList(store) {
        axios.get("https://gym-capstone.hasura.app/api/rest/trainer").then((response) => {
            store.commit("setTrainer", response.data.trainer)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}