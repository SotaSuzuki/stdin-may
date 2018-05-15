const moduleName = 'counter'

export const counter = {
  namespaced: true,

  state: {
    count: 0,
  },

  getters: {
    countDouble (state) {
      return state.count * 2
    },
  },

  mutations: {
    increment (state) {
      state.count++
    },

    addCount (state, amount) {
      state.count += amount
    },
  },

  actions: {
    increment ({ commit }) {
      commit('increment')
    },

    // NOTE mutation は同期的でなければならない
    // NOTE action は非同期処理を盛り込める
    async add ({ dispatch, commit, state, rootState }, { amount }) {
      // console.log('state', state)
      // console.log('rootState', rootState)
      const addCount = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            // commit('addCount', amount)
            commit(`${moduleName}/addCount`, amount, { root: true })
            dispatch('increment')
            resolve()
          }, 1000)
        })
      }
      await addCount()
      return () => console.log('done')
    },
    // NOTE ↑のを Promise で書いた
    // add ({ commit }, payload) {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       commit('addCount', payload.amount)
    //       resolve(() => console.log('done'))
    //     }, 1000)
    //   })
    // }
  },
}
