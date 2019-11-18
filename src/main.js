import Vue from 'vue'
import App from './App.vue'

import router from './router'
Vue.config.productionTip = false;

/*import html2pdf from 'html2pdf.js'
Vue.use(html2pdf);*/

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
