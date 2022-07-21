import Vue from 'vue'

import axios from 'axios'

Vue.use(axios)

const state = () => ({
    class_nameList: [],
})
const mutations = {
    setClass(state, param) {
        state.class_nameList = param
    }
}
const actions = {
    fetchList(store) {
        axios.get("https://gym-capstone.hasura.app/api/rest/classname").then((response) => {
            store.commit("setClass", response.data.class_name)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}