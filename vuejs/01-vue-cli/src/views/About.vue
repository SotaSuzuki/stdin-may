<template>
  <div class="about">
    <h1>{{message}}</h1>
    <FirstFuncButton
      name="first"
      @click="log"
    >First</FirstFuncButton>
    <SecondFuncButton
      name="second"
      @click="log"
    >Second</SecondFuncButton>
  </div>
</template>

<script>
import FirstFuncButton from '@/components/FirstFuncButton'
import SecondFuncButton from '@/components/SecondFuncButton'

export default {
  data () {
    return {
      message: 'This is an about page'
    }
  },

  methods: {
    log () {
      console.log('logged!')
    }
  },

  components: {
    FirstFuncButton,
    SecondFuncButton
  }
}
</script>
