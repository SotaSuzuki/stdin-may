export const Hoge = {
  install (Vue, { nightMode }) {
    // NOTE グローバルなメソッド、またはプロパティの追加
    Vue.sayHello = () => alert('hello')

    // NOTE グローバルアセット (directive) を追加
    // 以下の例は v-nanka を追加している
    Vue.directive('nanka', {
      bind (el, binding, vnode, oldVnode) {},
    })

    // NOTE グローバルに mixin を追加
    Vue.mixin({
      beforeDestroy () {
        if (!nightMode) {
          return
        }
        console.log('called at beforeDestroy from Hoge plugin')
      },
    })

    Vue.prototype.$sayHello = (name) => alert(`Hello, ${name}!`)
  },
}
