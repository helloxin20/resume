import Vue from 'vue'
import App from './App.vue'

import router from './router'
Vue.config.productionTip = false;

import pdf from 'html2pdf.js'
Vue.use(pdf);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
