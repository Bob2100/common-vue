<template>
  <div class="BaseSearchBox">
    <el-input :value="value" @input="$emit('input', $event)" />
    <el-button icon="el-icon-search" @click="$emit('search')">搜索</el-button>
  </div>
</template>
<script>
export default {
  name: 'BaseSearchBox',
  props: {
    value: String,
  },
}
</script>
<style lang="scss" scoped>
.BaseSearchBox {
  display: flex;
}
</style>
