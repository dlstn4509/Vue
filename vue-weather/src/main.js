import Vue from 'vue'
import App from './App.vue'
// import App from './01.Computed.vue'
// import App from './02.Watch.vue'
// import App from './03.Weather.vue'
// import App from './04.Weather.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
