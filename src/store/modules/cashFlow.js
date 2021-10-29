import cashFlow from '../../api/cashFlow';
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
    inserts(state, payload) {
      state.data.push(...payload);
      utils.sortByDate(state.data, "_reportDate");
    },
    updates(state, payload) {
      if (!payload || payload.length === 0) {
        return;
      }
      payload.forEach(p => {
        const index = state.data.findIndex(item => item === p);
        if (index === -1) {
          return;
        }
        state.data.splice(index, 1, p);
      });
    }
  },
  actions: {
    async init({ dispatch, commit }, code) {
      let res = await cashFlow.getsByCodeAndReportType(code, 0);
      if (res.code !== 0) {
        return;
      }
      const realLocals = res.result;
      commit('set', realLocals);

      const remotes = await dispatch('getRemotes', { code, locals: realLocals });
      if (remotes.length !== 0) {
        dispatch('inserts', remotes);
      }
    },
    async getRemotes(action, { code, locals }) {
      const count = utils.getRemoteFinanceCount(locals);
      if (count === 0) {
        return [];
      }
      const remotes = await cashFlow.getRemotes(code, count);
      if (remotes.code !== 0) {
        return [];
      }
      const exists = locals.map(item => item._reportDate);
      return remotes.result.filter(item => exists.indexOf(item._reportDate) === -1);
    },
    inserts({ commit }, payload) {
      cashFlow.inserts(payload).then(res => {
        if (res.code !== 0) {
          return;
        }
        commit('inserts', payload);
      });
    },
    updates({ commit }, payload = []) {
      if (!payload || payload.length === 0) {
        return;
      }
      cashFlow.updates(payload).then(res => {
        if (res.code !== 0) {
          return;
        }
        const cashFlows = payload.filter(item => !utils.isForecast(item));
        commit('updates', cashFlows);

        const forecast = {
          _cashFlows: payload.filter(item => utils.isForecast(item))
        }
        commit('forecast/update', forecast, { root: true });
      });
    }
  }
}