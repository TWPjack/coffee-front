import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Photoswipe from 'vue-pswipe'

import App from './App.vue'
import router from './router'
import store from './store'

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faCartPlus, faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.withCredentials = true

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(Photoswipe)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
