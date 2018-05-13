import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },

  getters: {
    countDouble (state) {
      return state.count * 2
    }
  },

  mutations: {
    increment (state) {
      state.count++
    },

    setCount (state, amount) {
      state.count += amount
    }
  },

  actions: {
    increment ({ commit }) {
      commit('increment')
    },

    // mutation は同期的でなければならない
    // action は非同期処理を盛り込める
    async add ({ dispatch, commit }, { amount }) {
      const addCount = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            commit('setCount', amount)
            dispatch('increment')
            resolve()
          }, 1000)
        })
      }
      await addCount()
      return () => console.log('done')
    }
    // add ({ commit }, payload) {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       commit('setCount', payload.amount)
    //       resolve(() => console.log('done'))
    //     }, 1000)
    //   })
    // }
  }
})
