<template>
  <div class="home">
    <h1>{{title | reverse}}</h1>
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

  data () {
    return {
      title: 'HomE',
    }
  },

  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss" scoped>
@keyframes rotateTitle {
  0% {
    color: #028;
    transform: rotateZ(8deg)
  }
  25% {
    color: #0cf;
    transform: rotateZ(-8deg) scale(3) skewX(45deg)
  }
  30% {
    color: #0cf;
    transform: rotateZ(-8deg) scale(5) skewX(45deg)
  }
  50% {
    color: #0cf;
    transform: rotateZ(-8deg) scale(5) skewX(45deg)
  }
  80% {
    color: #028;
    transform: rotateZ(8deg)
  }
  100% {
    color: #028;
    transform: rotateZ(8deg)
  }
}
h1 {
  font-size: 50px;
  font-family: monospace;
  letter-spacing: .2em;
  animation: rotateTitle ease 5s infinite;
}

.user-links {
  padding-left: 0;
  > li {
    list-style-type: none;
  }
}
</style>
