import { configure } from '@storybook/vue'

import Vue from 'vue'

import FirstFuncButton from '../src/components/FirstFuncButton'

Vue.component('first-func-button', FirstFuncButton)

function loadStories () {
  require('../src/stories')
}

configure(loadStories, module)
