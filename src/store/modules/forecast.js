import forecast from '../../api/forecast';
import utils from '../../utils/index';
export default {
  namespaced: true,
  state: {
    data: {
      _incomes: [],
      _klines: [],
      _balances: [],
      _cashFlows: []
    }
  },
  mutations: {
    set(state, payload) {
      state.data = payload;
    },
    update(state, payload) {
      const keys = Object.keys(payload);
      keys.forEach(k => {
        const value = payload[k];
        if (!value || value.length === 0) {
          return;
        }
        value.forEach(v => {
          const index = state.data[k].findIndex(item => item === v);
          state.data[k].splice(index, 1, v);
        });
      });
    }
  },
  actions: {
    async init({ commit, dispatch }, code) {
      let res = await forecast.getLatests(code);
      if (res.code !== 0) {
        return;
      }
      const latestLocal = res.result;
      const incomes = latestLocal._incomes;
      if (incomes[0] && incomes[0]._forecastDate === utils.today()) {
        commit('set', latestLocal);
        return;
      }
      const remotes = await dispatch('getRemotes', code);
      if (remotes.length !== 0) {
        dispatch('insert', remotes);
      }
    },
    async getRemotes(action, code) {
      const res = await forecast.getRemotes(code);
      if (res.code !== 0) {
        return [];
      }
      return res.result;
    },
    async insert({ commit }, payload) {
      const res = await forecast.insert(payload);
      if (res.code !== 0) {
        return;
      }
      commit('set', payload);
    },
  }
}