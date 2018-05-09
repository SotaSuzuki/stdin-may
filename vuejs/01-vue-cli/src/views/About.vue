<template>
  <div class="about">
    <h1>{{message}}</h1>
    <FirstFuncButton
      name="first"
      @click="goBack"
    >First</FirstFuncButton>
    <SecondFuncButton
      name="second"
      @click="goBack"
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

  mounted () {
    console.log('history', window.history)
    console.log('route', this.$route)
    console.log('router', this.$router)
  },

  methods: {
    goBack () {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  },

  components: {
    FirstFuncButton,
    SecondFuncButton
  }
}
</script>
