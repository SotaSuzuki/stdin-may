<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Users</h2>
    <ul class="user-links">
      <li><router-link :to="{ name: 'user', params: { id: 'suzuki' } }">Suzuki</router-link></li>
      <li><router-link :to="{ name: 'user', params: { id: 'sato' } }">Sato</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss" scoped>
.user-links {
  padding-left: 0;
  > li {
    list-style-type: none;
  }
}
</style>
