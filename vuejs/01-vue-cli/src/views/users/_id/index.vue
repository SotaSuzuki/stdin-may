<template>
  <div class="about">
    <h1>user name: {{id}}</h1>
    <div class="links">
      <router-link :to="`/users/${id}/profile`">profile</router-link>
      |
      <router-link :to="`/users/${id}/photos`">photos</router-link>
      |
      <router-link :to="`/users/${id}/counter`">counter</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    },
  },

  created () {
    this.$sayHello(this.id)
  },

  // NOTE 同じコンポーネント内でのパラメータの変更を検知
  // beforeRouteUpdate (to, from, next) {
  //   console.log('from', from)
  //   console.log('to', to)
  //   next()
  // },

  // NOTE 同一コンポーネント内のパラメータ変更ではライフサイクルメソッドはコールされない
  mounted () {
    console.log('route.params', this.$route.params)
  },

  // NOTE beforeRouteUpdate() でやっていることと同じ
  // $route を watch してもOK
  watch: {
    '$route' (to, from) {
      console.log('from', from)
      console.log('to', to)
    },
  },
}
</script>
