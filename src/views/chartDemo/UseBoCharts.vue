<template>
  <div class="UseBoCharts">
    <el-tabs tab-position="right" v-model="activeTab">
      <el-tab-pane label="快速开始" name="quick">
        <QuickStart v-if="activeTab === 'quick'" />
      </el-tab-pane>
      <el-tab-pane label="工具类" name="utils">
        <UtilsDemo v-if="activeTab === 'utils'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import QuickStart from './QuickStart.vue'
import UtilsDemo from './UtilsDemo.vue'
export default {
  components: {
    QuickStart,
    UtilsDemo,
  },
  data() {
    return {
      activeTab: 'quick',
    }
  },
}
</script>

<style lang="scss" scoped></style>
