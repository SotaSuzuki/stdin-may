export const helloMixin = {
  props: {
    msg: String,
  },

  created () {
    console.log('Hello world!')
  },
}
