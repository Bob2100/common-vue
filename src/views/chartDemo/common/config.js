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
        data: ['系列1', '系列2']
      }
    },
    title() {
      return {
        text: this.titleText
      }
    },
  }
}