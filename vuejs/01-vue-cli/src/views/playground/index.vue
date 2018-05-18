<template>
  <div>
    <h1>Playground</h1>
    <div>
      <!-- NOTE DoEmitButton コンポーネントに custom-event を渡している -->
      <!-- これを受け取ったコンポーネントは $emit(カスタムイベント名, 引数) でこれを trigger する -->
      <!-- NOTE showMessage($event) でもおk。$event で送出されたイベントの値にアクセスできる -->
      <DoEmitButton type="button" v-on:custom-event="showMessage">emit button</DoEmitButton>
    </div>

    <div>
      <label for="">
        名前
        <!-- NOTE 親で v-model を使った場合は子で @input="$emit('input', $event.target.value)" とかいろいろやらなきゃいかんのです -->
        <CustomInput v-model="name"/>
      </label>
      <label>
        年齢
        <CustomInput v-model="age"/>
      </label>
    </div>

    <div>
      <h2>Tab</h2>
      <ul>
        <li><button @click="changeTab(1)">tab 1</button></li>
        <li><button @click="changeTab(2)">tab 2</button></li>
        <li><button @click="changeTab(3)">tab 3</button></li>
      </ul>

      <div>{{tabContent}}</div>
    </div>
  </div>
</template>

<script>
import DoEmitButton from '@/components/DoEmitButton'
import CustomInput from '@/components/CustomInput'

export default {
  components: {
    DoEmitButton,
    CustomInput,
  },

  data () {
    return {
      name: 'Hogeta',
      age: 20,
      currentTab: 1,
    }
  },

  computed: {
    tabContent () {
      return 'content 1'
    },
  },

  methods: {
    showMessage (msg) {
      console.log(msg)
    },

    changeTab (id) {
      console.log(id)
      this.currentTab = id
    },
  },
}
</script>
