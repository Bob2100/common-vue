export default {
  /**
   * @description 获取今天日期
   * @returns {String} 今天日期字符串
  */
  today() {
    return new Date().toLocaleDateString();
  },
  /**
   * @description 将毫秒值换算成天数
   * @param {ms: Number} 毫秒值
   * @returns {Number} 天数
  */
  msToDay(ms) {
    return ms / 1000 / 60 / 60 / 24;
  },
}