import income from '../../api/income';
import utils from '../../utils/utils';
export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    set(state, payload) {
      state.data = payload;
      utils.sortByDate(state.data, "_reportDate");
    },
    insert(state, payload) {
      state.data.push(...payload);
      utils.sortByDate(state.data, "_reportDate");
    },
    updates(state, payload = []) {
      if (!payload || payload.length === 0) {
        return;
      }
      payload.forEach(p => {
        const index = state.data.findIndex(item => item === p);
        state.data.splice(index, 1, p);
      });
    }
  },
  actions: {
    async init({ dispatch, commit }, code) {
      let res = await income.getsByCodeAndReportType(code, 0);
      if (res.code !== 0) {
        return;
      }
      const realLocals = res.result;
      commit('set', realLocals);

      const remotes = await dispatch('getRemotes', { code, locals: realLocals });
      if (remotes.length !== 0) {
        dispatch('insert', remotes);
      }
    },
    async getRemotes(action, { code, locals }) {
      const count = utils.getRemoteFinanceCount(locals);
      if (count === 0) {
        return [];
      }
      const remotes = await income.getRemotes(code, count);
      if (remotes.code !== 0) {
        return [];
      }
      const exists = locals.map(item => item._reportDate);
      return remotes.result.filter(item => exists.indexOf(item._reportDate) === -1);
    },
    insert({ commit }, payload) {
      income.inserts(payload).then(res => {
        if (res.code !== 0) {
          return;
        }
        commit('insert', payload);
      });
    },
    updates({ commit }, payload = []) {
      if (!payload || payload.length === 0) {
        return;
      }
      income.updates(payload).then(res => {
        if (res.code !== 0) {
          return;
        }
        const incomes = payload.filter(item => !utils.isForecast(item));
        commit('updates', incomes);

        const forecast = {
          _incomes: payload.filter(item => utils.isForecast(item))
        }
        commit('forecast/update', forecast, { root: true });
      });
    }
  }
}