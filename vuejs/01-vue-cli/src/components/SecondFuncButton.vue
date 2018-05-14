<script>
export default {
  functional: true,
  render (h, { props, data, listeners, children }) {
    // console.log('data', data)
    return h('button', {
      attrs: props,
      on: {
        click: listeners.click,
      },
    }, children)
  },
}
</script>
