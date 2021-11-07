<template>
  <div class="Main">
    <router-view />
    <DemoLineChart />
  </div>
</template>

<script>
import DemoLineChart from '../chartDemo/DemoLineChart.vue'
export default {
  name: "Main",
  components: {
    DemoLineChart
  }
};
</script>