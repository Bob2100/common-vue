export default {
  props: {
    titleText: String
  },
  computed: {
    color() {
      return ['#e7a456', '#66cd9f'];
    },
    legend() {
      return {
        bottom: 0,
        icon: 'circle',
        data: ['客户值', '行业中值']
      }
    },
    title() {
      return {
        text: this.titleText
      }
    },
  }
}