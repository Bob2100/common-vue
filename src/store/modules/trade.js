import trade from '../../api/trade';
export default {
  state: {
    trades: []
  },
  mutations: {
    setTrades(state, trades) {
      state.trades = trades;
    }
  },
  actions: {
    initTrades({ commit }) {
      trade.gets().then(res => {
        if (res.code !== 0) {
          return;
        }
        commit('setTrades', res.result);
      });
    }
  }
}