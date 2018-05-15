import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import {
  counter,
  contactForm,
} from './modules'
import { firstPlugin } from './plugins'

Vue.use(Vuex)

console.log(process.env.NODE_ENV)

export default new Vuex.Store({
  // NOTE strict モードは mutation 以外からの状態の変更を禁止する
  strict: process.env.NODE_ENV !== 'production',

  state,
  mutations,
  actions,
  getters,

  modules: {
    counter,
    contactForm,
  },

  // NOTE plugin は mutation へのフック
  plugins: [firstPlugin],
})
