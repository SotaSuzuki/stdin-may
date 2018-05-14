<template>
  <div>
    <h1>{{id}}'s counter</h1>
    <p>count: {{count}}</p>
    <p>count+localCount: {{countPlusLocalState}}</p>
    <p>id+count: {{idPlusCount}}</p>
    <p>countDouble: {{countDouble}}</p>
    <p>countDoubleLocal: {{countDoubleLocal}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

// NOTE その名前空間の mapState とかをバインドする
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapGetters, mapActions } = createNamespacedHelpers('modules/counter')

// // NOTE 動的に module を追加可能
// store.registerModule(moduleName)
// store.unregisterModule(moduleName)

export default {
  data () {
    return {
      id: this.$route.params.id,
      localCount: 10,
    }
  },

  computed: {
    idPlusCount () {
      return `${this.id}: ${this.count}`
    },

    countDoubleLocal () {
      return this.$store.getters['counter/countDouble']
    },

    // NOTE 第一引数を使わない場合
    // ...mapState({
    //   count: state => state.counter.count,
    //   countAlias: 'counter/count', // state => state.count と同じ
    //   countPlusLocalState (state) {
    //     return state.counter.count + this.localCount
    //   },
    // }),
    ...mapState('counter', {
      count (state) {
        return state.count
      },
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.count + this.localCount
      },
      // NOTE アローファンクションを使うと this が Vue インスタンスではなくなってしまう
      // countPlusLocalState: (state) => state.count + this.localCount,
    }),

    // NOTE 第一引数を使わない場合
    // ...mapGetters({
    //   countDouble: 'counter/countDouble',
    // }),

    ...mapGetters('counter', ['countDouble']),

    // NOTE createNamespacedHelpers を使ってバインドさせた場合
    // ...mapGetters(['countDouble']),
  },

  beforeMount () {
    this.increment()
    this.add(100)
  },

  methods: {
    // NOTE 下の mapActions で mapping している
    // increment () {
    //   this.$store.dispatch('counter/increment')
    // },

    add (amount) {
      // NOTE store.dispatch は Promise を返す
      this.$store.dispatch('counter/add', { amount })
        .then((done) => {
          done()
        })
    },

    // NOTE this.increment() is mapped this.$store.dispatch('counter/increment')
    // ...mapActions(['counter/increment']),
    ...mapActions('counter', ['increment']),
  },
}
</script>

<style lang="css">
</style>
