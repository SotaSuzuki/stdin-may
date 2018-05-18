<template>
  <button type="button" @click="onClick">
    <slot/>
  </button>
</template>

<script>
export default {
  methods: {
    onClick () {
      // NOTE 親から渡された v-on:custom-event を trigger する。
      // 引数は $emit() の第二引数以降
      this.$emit('custom-event', 'hoge')
    },
  },
}
</script>
