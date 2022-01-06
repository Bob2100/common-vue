import BaseSearchBox from './BaseSearchBox.vue'
const components = [BaseSearchBox]
const install = function (Vue) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
}
