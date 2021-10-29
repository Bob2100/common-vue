import stock from '../../api/stock';
import utils, { $confirm, $message } from '../../utils/index';
export default {
  namespaced: true,
  state: {
    stocks: []
  },
  mutations: {
    set(state, stocks) {
      utils.sortByZH(stocks, '_name');
      state.stocks = stocks;
    },
    delete(state, code) {
      const index = state.stocks.findIndex(item => item._code === code);
      state.stocks.splice(index, 1);
    },
    update(state, stock) {
      const index = state.stocks.findIndex(item => item._code === stock._code);
      state.stocks.splice(index, 1, stock);
    },
    insert(state, stock) {
      state.stocks.push(stock);
      utils.sortByZH(state.stocks, '_name');
    }
  },
  actions: {
    init({ commit }) {
      stock.gets().then(res => {
        if (res.code !== 0) {
          return;
        }
        commit('set', res.result);
      });
    },
    async delete({ commit }, code) {
      try {
        await $confirm("确认删除？");
        const res = await stock.delete(code);
        if (res.code !== 0) {
          return;
        }
        $message({
          type: "success",
          message: "删除成功",
        });
        commit('delete', code);
      } catch (error) {
        $message({
          type: "info",
          message: "已取消删除",
        });
      }
    },
    async insert({ commit }, stockParam) {
      const res = await stock.insert(stockParam);
      if (res.code !== 0) {
        return;
      }
      commit('insert', stockParam);
    },
    async update({ commit }, stockParam) {
      const res = await stock.update(stockParam);
      if (res.code !== 0) {
        return false;
      }
      commit('update', stockParam);
      return true;
    }
  }
}