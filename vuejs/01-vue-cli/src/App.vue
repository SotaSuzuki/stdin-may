 <template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/playground">Playground</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  border: 5px solid rgba(#000, .4);
  padding: 30px;
  a {
    font-size: 1.3rem;
    color: #2c3e50;
    &.router-link-exact-active {
      font-weight: bold;
      color: #42b983;
    }
  }
}
</style>
