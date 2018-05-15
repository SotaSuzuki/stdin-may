<template>
  <div>
    <label for="name">
      名前
      <!-- NOTE method で commit, computed でバインドする v-model を使わない実装 -->
      <input id="name" type="text" name="" :value="name" @input="updateName">
    </label>

    <label for="body">
      お問い合わせ内容
      <!-- <input type="text" id="body" name="" :value="body"> -->
      <!-- NOTE v-model と computed setter, getter を使って双方向バインディングを実装 -->
      <textarea id="body" v-model="body"></textarea>
    </label>

    <input type="submit" value="送信">
  </div>
</template>

<script>
export default {
  computed: {
    // name: {
    //   get () {
    //     return this.$store.state.contactForm.name
    //   },
    //   set (value) {
    //     this.$store.commit('contactForm/setName', value)
    //   },
    // },

    // NOTE computed と method に処理がばらけるのが傷かな
    name () {
      return this.$store.state.contactForm.name
    },

    // NOTE このパターンは v-model と併用する必要あり
    body: {
      get () {
        return this.$store.state.contactForm.body
      },
      set (value) {
        console.log(value)
        this.$store.commit('contactForm/setBody', value)
      },
    },
  },

  methods: {
    updateName (e) {
      this.$store.commit('contactForm/setName', e.target.value)
    },
  },
}
</script>

<style lang="scss">
label {
  display: block;
}
</style>
