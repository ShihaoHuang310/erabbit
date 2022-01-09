import { createStore } from 'vuex'
const moduleA = {
  state: () => {
    return {
      username: '模块a',
    }
  },
  getters: {
    changeName(state) {
      return state.username + 'aaaaaaaaa'
    },
  },
}

const moduleB = {
  namespaced: true,
  state: () => {
    username: '模块b'
  },
  getters: {
    changeName(state) {
      return state.username + 'bbbbbbbbb'
    },
  },
  mutations: {
    updateName(state) {
      state.username = 'bbbbb' + state.username
    },
  },
  actions: {
    updateName({ commit }) {
      setTimeout(() => {
        commit('updateName')
      }, 1000)
    },
  },
}
export default createStore({
  state: {
    person: [
      { id: 1, name: 'zs', gender: '男' },
      { id: 2, name: 'sd', gender: '男' },
      { id: 3, name: 'zz', gender: '女' },
    ],
  },
  modules: {
    moduleA,
    moduleB,
  },
  getters: {
    boys: (state) => {
      return state.person.filter((p) => p.gender === '男')
    },
  },
})
