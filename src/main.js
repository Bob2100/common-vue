import Vue from 'vue'
import './global'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import './style/index.less'
import mixin from './mixin'

Vue.config.productionTip = false;
Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
