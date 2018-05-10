import { configure } from '@storybook/vue'

import Vue from 'vue'

import FirstFuncButton from '../src/components/FirstFuncButton'

Vue.component('first-func-button', FirstFuncButton)

function loadStories () {
  require('../src/stories')

  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
  console.log('req.keys()', req.keys())
}

configure(loadStories, module)
