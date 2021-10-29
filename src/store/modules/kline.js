import kline from '../../api/kline';
import utils from '../../utils/index';
import Vue from 'vue';
const $confirm = Vue.prototype.$confirm;
const $message = Vue.prototype.$message;
export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    set(state, payload) {
      state.data = payload;
      utils.sortByDate(state.data, "_timestamp");
    },
    insert(state, payload) {
      state.data.push(...payload);
      utils.sortByDate(state.data, "_timestamp");
    },
    update(state, payload) {
      const index = state.data.findIndex(item => item === payload);
      state.data.splice(index, 1, payload);
    }
  },
  actions: {
    async init({ dispatch, commit }, code) {
      let res = await kline.getsByCodeAndForecast(code, 0);
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
      const res = await kline.getRemotes(code, 284);
      if (res.code !== 0) {
        return [];
      }
      return res.result.filter(
        ({ _timestamp }) =>
          locals.map(({ _timestamp }) => _timestamp).indexOf(_timestamp) === -1
      );
    },
    insert({ commit }, payload) {
      kline.inserts(payload).then(res => {
        if (res.code !== 0) {
          return;
        }
        commit('insert', payload);
      });
    },
    async update({ commit }, payload) {
      try {
        await $confirm("确认保存？");
        const res = await kline.update(payload);
        if (res.code !== 0) {
          return;
        }
        $message({
          type: "success",
          message: "保存成功",
        });
        commit('update', payload);
        return res;
      } catch (error) {
        $message({
          type: "info",
          message: "已取消",
        });
      }
    }
  }
}