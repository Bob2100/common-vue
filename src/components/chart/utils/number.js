export default {
  /**
   * @description 转换数字的单位，比如将 10000 转换成 1万。
   * @param {num: Number, config: Object} 。
   * num: 待转换的数字。
   * config支持的配置项示例：
   * {
   *   unit: 4,
   *   point: 2,
   *   isFormatZero: true,
   *   isWithThousandMark: true
   * }
   * congfig配置项的说明：
   * unit: 单位，默认为0 保持原单位，-2 格式化单位为百分之一，-1 格式化单位为十分之一，
   *   1 格式化单位为十，2 格式化单位为百，...，8 格式化单位为亿，...，
   *   比如要将 10000 转为 1万，unit需要传4 ，将 0.05 转成 5% ，unit需要传-2。
   *   需要注意的是10000转成1万，返回的是1，而不是1万；0.05转成5%，返回的是5，而不是5%。
   * point：要保持的小数位数，默认为2，保留两位小数。
   * isFormatZero: 默认为false，0还是0；true，0会转成 -- 。
   * isWithThousandMark：默认为true，会给数字添加千分位符，
   *   并且最终返回值的类型是字符串；false，则不添加且返回值的类型仍是数字。
   * @returns {Number ｜ String} 转换后的值
  */
  formatNum(num, config) {
    let { unit, point, isFormatZero, isWithThousandMark } = config;
    if (typeof isFormatZero !== 'boolean') {
      isFormatZero = false;
    }
    num = isNaN(num) ? 0 : num;
    if (num === 0 && isFormatZero) {
      return '--';
    }
    unit = parseInt(unit, 10);
    if (isNaN(unit)) {
      unit = 0;
    }
    point = parseInt(point, 10);
    if (isNaN(point) || point < 0) {
      point = 2;
    }
    if (typeof isWithThousandMark !== 'boolean') {
      isWithThousandMark = true;
    }
    num = (Math.round(num * Math.pow(10, point - unit)) / Math.pow(10, point)).toFixed(point);
    if (isWithThousandMark) {
      return this.withThousandMark(num);
    }
    return num;
  },
  /**
   * @description 把数字格式化成带千分位符的字符串
   * @param {num: Numner} 待格式化的数字
   * @returns {String} 带千分位符的字符串
  */
  withThousandMark(num) {
    const tempArr = Array.from(num);
    let pointIndex = tempArr.indexOf('.');
    if (pointIndex === -1) {
      pointIndex = tempArr.length;
    }
    let tempIndex = pointIndex - 3;
    while (tempIndex > 0) {
      tempArr.splice(tempIndex, 0, ',');
      tempIndex = tempIndex - 3;
    }
    return tempArr.join('');
  }
}