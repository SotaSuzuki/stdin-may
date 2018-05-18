<template>
  <!-- NOTE 親で v-model を使用する想定 -->
  <input
    type="text"
    @input="$emit('input', $event.target.value)"
    :value="value"
  >
</template>

<script>
export default {
  props: ['value'],
}
</script>
