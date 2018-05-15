const moduleName = 'contactForm'

export const contactForm = {
  namespaced: true,

  state: {
    name: '',
    body: 'デフォルト',
  },

  getters: {},
  mutations: {
    setName (state, name) {
      state.name = name
    },

    setBody (state, body) {
      state.body = body
    },
  },

  actions: {},
}
