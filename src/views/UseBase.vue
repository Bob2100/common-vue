<template>
  <div>
    <BaseSearchBox
      v-model="keyWord"
      v-bind="{ placeholder: '请输入关键字', clearable: true }"
      @search="doSearch" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    doSearch() {
      console.log(this.keyWord)
    },
  },
}
</script>
<style lang="scss" scoped>
::v-deep .BaseSearchBox {
  width: 25%;
}
</style>
