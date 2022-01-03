import Vue from 'vue'
import './global'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import BoCharts from 'bo-charts'
import BoUI from './bo-ui'
import './style/index.less'
import mixin from './mixin'

Vue.config.productionTip = false;
Vue.mixin(mixin);
Vue.use(BoCharts);
Vue.use(BoUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
