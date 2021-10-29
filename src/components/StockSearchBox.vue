<template>
  <el-autocomplete
    class="StockSearchBox"
    v-model="val"
    @input="$emit('input',val)"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入股票名称或代码"
    @select="handleSelect"
    clearable
  >
    <i class="el-icon-search el-input__icon" slot="suffix"></i>
  </el-autocomplete>
</template>

<script>
import api from "../api/stock";

export default {
  name: "StockSearchBox",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: String,
    isFilter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      val: "",
    };
  },
  watch: {
    value() {
      this.val = this.value;
    },
  },
  methods: {
    querySearchAsync(queryString, callback) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        api.getRemoteStocks({ code: queryString }).then((res) => {
          let stocks = res.result.stocks;
          if (!stocks) {
            callback([]);
            return;
          }

          if (this.isFilter) {
            const localStocks = this.stocks.map(({ _code }) => _code);
            stocks = stocks.filter(
              ({ code }) => localStocks.indexOf(code) !== -1
            );
          }
          callback(
            stocks.map((stock) => {
              stock.value = `${stock.name} [ ${stock.code} ] `;
              return stock;
            })
          );
        });
      }, 1000);
    },
    handleSelect(val) {
      this.$emit("select", val);
    },
  },
};
</script>
<style lang="less" scoped>
.StockSearchBox {
  display: inline-block;
}
</style>