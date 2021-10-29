import dealRecord from '../../api/dealRecord';
import { $confirm, $message } from '../../utils/index';

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    set(state, payload) {
      state.data = payload;
    },
    inserts(state, payload) {
      state.data.push(...payload);
    },
    insert(state, payload) {
      state.data.push(payload);
    },
    updates(state, payload) {
      if (!payload || payload.length === 0) {
        return;
      }
      payload.forEach(p => {
        const index = state.data.findIndex(item => item === p);
        state.data.splice(index, 1, p);
      });
    },
    delete(state, payload) {
      const index = state.data.findIndex(item => item._uuid === payload);
      state.data.splice(index, 1);
    }
  },
  actions: {
    async init({ commit }, code) {
      const res = await dealRecord.gets(code);
      if (res.code !== 0) {
        return;
      }
      commit('set', res.result);
    },
    async insert({ commit }, payload) {
      const res = await dealRecord.insert(payload);
      if (res.code !== 0) {
        return;
      }
      commit('insert', payload);
    },
    async inserts({ commit }, payload) {
      const res = await dealRecord.inserts(payload);
      if (res.code !== 0) {
        return;
      }
      commit('inserts', payload);
    },
    async updates({ commit }, payload) {
      if (!payload || payload.length === 0) {
        return false;
      }
      const res = await dealRecord.updates(payload);
      if (res.code !== 0) {
        return false;
      }
      commit('updates', payload);
      return true;
    },
    async delete({ commit }, payload) {
      try {
        await $confirm("确认删除？");
        const res = await dealRecord.delete(payload);
        if (res.code !== 0) {
          return;
        }
        $message({
          type: "success",
          message: "删除成功",
        });
        commit('delete', payload);
      } catch (error) {
        $message({
          type: "info",
          message: "已取消删除",
        });
      }
    }
  }
}