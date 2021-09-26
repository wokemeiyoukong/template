import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'fang'
  },
  mutations: {
    setName(state, payload) {
      state.name = payload
    }
  }
})