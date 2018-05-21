<script>
export default {
  functional: true,
  render (h, context) {
    // 透過的に listener や slots を適用できて楽
    return h('button', context.data, context.children)
  },
}
</script>
