import BoChart from './bo-chart.vue'
import BoRadarChart from './bo-radar-chart.vue'
import BoLineChart from './bo-line-chart.vue'
const components = [
  BoChart,
  BoRadarChart,
  BoLineChart
]
const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}
