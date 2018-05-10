import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import FirstFuncButton from '../components/FirstFuncButton'

storiesOf('FirstFuncButton', module)
  .add('story as a component', () => ({
    components: { FirstFuncButton },
    template: `
      <first-func-button name="bots" @click="log">First Button</first-func-button>
    `,
    methods: {
      log () { console.log('logged') }
    }
  }))
