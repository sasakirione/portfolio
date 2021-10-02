import Vue from 'vue'
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import router from "@/plugins/router";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

library.add(faLeaf)
Vue.config.productionTip = false
Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
