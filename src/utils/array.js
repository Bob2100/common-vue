export const SORT_TYPE = {
  asc: 0,
  desc: 1
}

export default {
  /**
   * @description 求一组数去掉最大值最小值后的平均值
   * @param {Array} 待求平均值的数组
   * @returns {Number} 去掉最大值最小值后的平均值
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
   * @description 将一个数组转换成前n项平均值的数组
   * @param {Array} 待转换数组
   * @returns 转换成前n项平均值的数组
  */
  getAverageArr(arr) {
    const temp = [];
    const result = [];
    arr.forEach(item => {
      temp.push(item);
      result.push(this.getAverage(temp));
    });
    return result;
  },
  /**
   * @description 一个数组中存放的是对象，这些对象都有一个属性值是日期字符串，
   * 此方法可以将这些对象在数组中按照这个属性升序或降序排列，此方法改变原数组
   * @param {arr: Array, key: String, type: SORT_TYPE} 
   * arr示例：
   * [
   *   {
   *     name: '张三',
   *     birthday: '1991-09-17'
   *   },
   *   {
   *     name: '李四',
   *     birthday: '1998-04-16'
   *   }
   * ]
   * key示例：'birthday'
   * type示例：SORT_TYPE.desc
   * @returns 原数组，但已排序
  */
  sortByDate(arr, key, type = SORT_TYPE.asc) {
    arr.sort((a, b) => {
      if (type === SORT_TYPE.desc) {
        return new Date(b[key]) - new Date(a[key]);
      }
      return new Date(a[key]) - new Date(b[key]);
    });
    return arr;
  },
  /**
   * @description 一个数组中存放的是对象，这些对象都有一个属性值是中文字符串，
   * 此方法可以将这些对象在数组中按照这个属性升序或降序排列，此方法改变原数组
   * @param {arr: Array, key: String, type: SORT_TYPE} 
   * arr示例：
   * [
   *   {
   *     name: '张三',
   *     birthday: '1991-09-17'
   *   },
   *   {
   *     name: '李四',
   *     birthday: '1998-04-16'
   *   }
   * ]
   * key示例：'name'
   * type示例：SORT_TYPE.desc
   * @returns 原数组，但已排序
  */
  sortByZH(arr, key, type = SORT_TYPE.asc) {
    const local = 'zh';
    arr.sort((a, b) => {
      if (type === SORT_TYPE.desc) {
        return b[key].localeCompare(a[key], local);
      }
      return a[key].localeCompare(b[key], local);
    });
    return arr;
  },
  /**
   * @description 一个数组中存放的是对象，这些对象都有一个属性值是数字，
   * 此方法可以将这些对象在数组中按照这个属性升序或降序排列，此方法改变原数组
   * @param {arr: Array, key: String, type: SORT_TYPE} 
   * arr示例：
   * [
   *   {
   *     name: '张三',
   *     birthday: '1991-09-17',
   *     age: 30
   *   },
   *   {
   *     name: '李四',
   *     birthday: '1998-04-16',
   *     age: 23
   *   }
   * ]
   * key示例：'age'
   * type示例：SORT_TYPE.desc
   * @returns 原数组，但已排序
  */
  sortByNum(arr, key, type = SORT_TYPE.asc) {
    arr.sort((a, b) => {
      if (type === SORT_TYPE.desc) {
        return b[key] - a[key];
      }
      return a[key] - b[key];
    });
    return arr;
  }
}