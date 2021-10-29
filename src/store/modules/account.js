import account from '../../api/account';
export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    set(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async init({ commit }) {
      let res = await account.gets();
      if (res.code !== 0) {
        return;
      }
      commit('set', res.result);
    },
  }
}