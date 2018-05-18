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
      <!-- NOTE .lazy 修飾詞を使うと @input ではなく @change 後に値を更新する -->
      <!-- NOTE .trim はユーザーが最初や最後に空白を入れた時にそれらをトリムしてくれる -->
      <textarea id="body" v-model.lazy.trim="body"></textarea>
    </label>

    <div>
      性別
      <label for="male">
        男
        <input type="radio" v-model="sex.picked" name="sex" id="male" :value="sex.male">
      </label>
      <label for="female">
        女
        <input type="radio" v-model="sex.picked" name="sex" id="female" :value="sex.female">
      </label>
    </div>
    <div>Pick: {{sex.picked}}</div>

    <input type="submit" value="送信">
  </div>
</template>

<script>
export default {
  data () {
    return {
      sex: {
        picked: null,
        male: '男',
        female: '女',
      },
    }
  },

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
