<template>
  <div>
    <BaseSearchBox v-model="keyWord" v-bind="option" @search="doSearch" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: '',
    }
  },
  computed: {
    option() {
      return { placeholder: '请输入关键字', clearable: true }
    },
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
