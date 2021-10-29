import Vue from 'vue';
export const $confirm = Vue.prototype.$confirm;
export const $message = Vue.prototype.$message;
export const week = ['日', '一', '二', '三', '四', '五', '六'];
export default {
  getIncreaseRatio(num1, num2) {
    if (!num1 || num1 === 0) {
      return null;
    }
    return (num2 - num1) / num1;
  },
  uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  },
  today() {
    return new Date().toLocaleDateString();
  },
  /**
   * @desc 求一组数的平均值
   * @param arr 待求平均值的数组
  */
  getAverage(arr) {
    const temp = [...arr];
    if (temp.length > 2) {
      temp.sort((a, b) => a - b);
      temp.shift();
      temp.pop();
    }
    return temp.length ? temp.reduce((sum, cur) => sum + cur) / temp.length : 0;
  },
  /**
   * @desc 将一个数组转换成前n项平均值的数组
   * @param arr 待转换数组
  */
  getAverageArr(arr) {
    if (!Array.isArray(arr)) {
      return null;
    }
    const temp = [];
    const result = [];
    arr.forEach(item => {
      temp.push(item);
      result.push(this.getAverage(temp));
    });
    return result;
  },
  sortByDate(data, key, type = "asc") {
    data.sort((a, b) => {
      if (type === "desc") {
        return new Date(b[key]) - new Date(a[key]);
      }
      return new Date(a[key]) - new Date(b[key]);
    });
    return data;
  },
  sortByZH(data, key, type = "asc") {
    data.sort((a, b) => {
      if (type === 'desc') {
        return b[key].localeCompare(a[key], 'zh');
      }
      return a[key].localeCompare(b[key], 'zh');
    });
    return data;
  },
  sortByNum(data, key, type = "asc") {
    data.sort((a, b) => {
      if (type === 'desc') {
        return b[key] - a[key];
      }
      return a[key] - b[key];
    });
    return data;
  },
  isForecast(data) {
    return data._reportType === 1 || data._forecast === 1;
  },
  isYearReport(data) {
    return data._reportName.indexOf('年') !== -1;
  },
  getRemoteFinanceCount(local) {
    if (local.length === 0) {
      return 400;
    }
    const real = local.filter(item => !this.isForecast(item));
    const key = '_reportDate';
    this.sortByDate(real, key, 'desc');
    const lastDate = new Date(real[0][key]).valueOf();
    const today = new Date().valueOf();
    const minusDays = this.msToDay(today - lastDate);
    if (minusDays < 120) {
      return 0;
    }
    return Math.floor(minusDays / 90);
  },
  /**
   * @description 将毫秒值转换成天
   * @param ms 毫秒
   * @returns 天数
  */
  msToDay(ms) {
    return ms / 1000 / 60 / 60 / 24;
  },
  /**
   * @description 格式化数量，并添加千分位符
   * @param 
   *   amount 要格式化的数量
   *   unit 单位：不传或传0 保持原单位，-2 格式化单位为百分之一，-1 格式化单位为十分之一，
   *        1 格式化单位为十，2 格式化单位为百，...，8 格式化单位为亿，...
   *   point 要保持的小数位数，默认两位
  */
  formatAmount(amount, unit, point) {
    if (isNaN(amount) || amount === null || amount === '') {
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
    amount = Math.round(amount * Math.pow(10, point - unit)) / Math.pow(10, point);
    const tempArr = Array.from(amount.toFixed(point));
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