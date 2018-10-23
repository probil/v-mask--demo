import Vue from 'vue'
import App from './App.vue'

import VueMask from 'v-mask'

Vue.use(VueMask);

new Vue({
  el    : '#app',
  render: h => h(App)
});
