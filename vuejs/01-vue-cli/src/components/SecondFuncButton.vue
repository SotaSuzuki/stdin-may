<script>
const strings = ['h', 'e', 'l', 'l', 'o']

export default {
  functional: true,
  render (h, { props, data, listeners, children }) {
    // console.log('data', data)
    return h('button', {
      attrs: props,
      on: {
        click: listeners.click,
      },
      // render `hello`, each string is with a span tag.
    }, strings.map((n) => h('span', n)))
  },
}
</script>
