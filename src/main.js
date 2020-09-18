import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mixin from './mixins'

import './registerServiceWorker'

import { BootstrapVue } from 'bootstrap-vue'

Vue.mixin(mixin)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
