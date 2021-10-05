import Vue from 'vue' // node에 require, js module은 경로 필요
import App from './App.vue'

Vue.config.productionTip = false

import '@fortawesome/fontawesome-free/css/all.min.css' // css는 node_modules에 있음
// D:\cis\vue\vue-component\node_modules\@fortawesome\fontawesome-free\css
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
