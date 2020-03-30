// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import axios from 'axios'
import VueAnalytics from 'vue-analytics'

// LeafletのCSSを読み込み
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false
Vue.config.devtools = true

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-162190058-1',
  router,
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  axios,
  render: h => h(App),
}).$mount('#app')
