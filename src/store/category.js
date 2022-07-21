import Vue from 'vue'

import axios from 'axios'

Vue.use(axios)

const state = () => ({
    categoryList: [],
})
const mutations = {
    setCategory(state, param) {
        state.categoryList = param
    }
}
const actions = {
    fetchList(store) {
        axios.get("https://gym-capstone.hasura.app/api/rest/category").then((response) => {
            store.commit("setCategory", response.data.category)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}