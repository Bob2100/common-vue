export default {
  state: {
    isShowAside: true,
    season: '年'
  },
  mutations: {
    setIsShowAside(state, isShow) {
      state.isShowAside = isShow;
    },
    setSeason(state, season) {
      state.season = season;
    }
  }
}