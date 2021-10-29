<template>
  <el-form
    class="BaseForm"
    :model="model"
    :rules="rules"
    :label-width="labelWidth"
    label-position="right"
    ref="form"
  >
    <slot></slot>
    <el-form-item v-if="isShowBtns" label-width="auto" class="form-btns">
      <el-button type="primary" icon="search" @click="submit">
        <span>{{$t('customerList.button.search')}}</span>
      </el-button>
      <el-button :plain="true" @click="reset">{{$t('customerList.button.reset')}}</el-button>
      <el-button :plain="true" @click="handleExport">{{$t('customerList.button.export')}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'BaseForm',
  props: {
    model: Object,
    rules: Object,
    labelWidth: {
      type: String,
      default: '46.125%'
    },
    isShowBtns: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleExport() {
      this.validate(valid => {
        if (!valid) {
          return
        }
        this.$emit('export')
      })
    },
    reset() {
      this.$refs.form.resetFields()
    },
    validate(callback) {
      this.$refs.form.validate(callback)
    },
    submit() {
      this.validate(valid => {
        if (!valid) {
          return
        }
        this.$emit('submit')
      })
    }
  }
}
</script>

<style scoped>
.BaseForm {
  display: flex;
  flex-wrap: wrap;
}

.form-btns {
  width: 100%;
  text-align: center;
}
</style>