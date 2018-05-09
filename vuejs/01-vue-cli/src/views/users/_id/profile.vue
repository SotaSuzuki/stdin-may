<template>
  <div>
    <h1>{{id}}'s profile</h1>
  </div>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="css">
</style>
