import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import { action } from '@storybook/addon-actions'

import FirstFuncButton from '../components/FirstFuncButton'

const Welcome = Vue.component('Welcome', {
  template: `<div>Welcome! <button @click="goToButton">go to button</button></div>`,
  props: {
    goToButton: [Function],
  },
})

storiesOf('Welcome', module)
  .add('Welcome', () => ({
    render: h => h(Welcome, {
      props: {
        goToButton: linkTo('FirstFuncButton'),
      },
    }),
  }))

storiesOf('FirstFuncButton', module)
  .add('story as a component', () => ({
    components: { FirstFuncButton },
    template: `
      <first-func-button name="bots" @click="act">First Button</first-func-button>
    `,
    methods: {
      act: action('clicked'),
    },
  }))
