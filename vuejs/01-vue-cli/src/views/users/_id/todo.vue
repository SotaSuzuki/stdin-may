<template>
  <div>
    <h1>{{id}}'s todo</h1>
    <p>count: {{count}}</p>
    <p>count+localCount: {{countPlusLocalState}}</p>
    <p>id+count: {{idPlusCount}}</p>
    <p>countDouble: {{countDouble}}</p>
    <p>+local: {{countDoubleLocal}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      id: this.$route.params.id,
      localCount: 10
    }
  },

  computed: {
    idPlusCount () {
      return `${this.id}: ${this.count}`
    },

    countDoubleLocal () {
      return this.$store.getters.countDouble
    },

    ...mapState({
      count: state => state.count,
      countAlias: 'count', // state => state.count と同じ
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),

    ...mapGetters(['countDouble'])
  },

  beforeMount () {
    this.increment()
    this.add(100)
  },

  methods: {
    // increment () {
    //   this.$store.dispatch('increment')
    // },

    add (amount) {
      this.$store.dispatch('add', { amount })
        .then((done) => {
          done()
        })
    },

    ...mapActions(['increment'])
  }
}
</script>

<style lang="css">
</style>
