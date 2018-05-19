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
      <ul class="tabmenu">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="tabmenu-item"
          :class="{
            'tabmenu-item--active': currentTabId === tab.id
          }"
          @click="changeTab(tab.id)"
        >
          <button>Tab {{tab.id}}</button>
        </li>
      </ul>

      <!-- NOTE 仮にこの tab-content がコンポーネントだった場合 -->
      <!-- <keep-alive> タグで囲むことでタブ切替の際にコンポーネントのインスタンスをキャッシュしてくれる -->
      <div class="tab-content">
        <p>TabId: {{currentTabContent.id}}</p>
        <p>{{currentTabContent.text}}</p>
      </div>
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
      // NOTE 基本的なタブの実装はこんな感じでは？
      tabs: [
        {
          id: 1,
          text: 'hogehogehoge',
        },
        {
          id: 2,
          text: 'fugafugafuag',
        },
        {
          id: 3,
          text: 'bazbazbazbaz',
        },
      ],
      currentTabId: 1,
    }
  },

  computed: {
    currentTabContent () {
      const index = this.tabs.findIndex((tab) => tab.id === this.currentTabId)
      return this.tabs[index]
    },
  },

  methods: {
    showMessage (msg) {
      console.log(msg)
    },

    changeTab (id) {
      this.currentTabId = id
    },
  },
}
</script>

<style lang="scss" scoped>
.tabmenu {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.tabmenu-item {
  border: 1px solid #000;
  > button {
    display: block;
    width: 100%;
    border: 0;
    padding: 6px;
  }

  &--active {
    border-color: #00f;
    border-width: 3px;
  }
}
</style>
