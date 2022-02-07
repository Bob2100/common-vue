import Vue from 'vue'
import './global'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import BoCharts from 'bo-charts'
import BoCode from './bo-code'
import BoUI from './bo-ui'
import components from './components'
import './style/index.less'
import mixin from './mixin'

Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.use(components)
Vue.use(BoCharts)
Vue.use(BoCode)
Vue.use(BoUI)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
