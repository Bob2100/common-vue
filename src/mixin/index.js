import { mapGetters } from "vuex";
export default {
  computed: {
    PATH_PARAM_SUM() {
      return window.PATH_PARAM_SUM;
    },
    selectedStock() {
      return this.stocks.find(({ _code }) => _code === this.$route.params.code) || {};
    },
    ...mapGetters([
      'stocks'
    ])
  }
}