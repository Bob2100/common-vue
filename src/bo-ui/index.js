import BoNavbar from './bo-navbar.vue'
import BoNavbarItem from './bo-navbar-item.vue'
const components = [
  BoNavbar,
  BoNavbarItem
]
const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}
