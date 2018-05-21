import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  reverse,
} from './customFilters'
import {
  Hoge,
} from './plugins/Hoge'

Vue.config.productionTip = false

Vue.filter('reverse', reverse)

Vue.use(Hoge, {
  nightMode: false,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
