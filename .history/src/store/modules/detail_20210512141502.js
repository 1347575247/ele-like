
export default {
  namespaced: true,
  state: () => {
    detailData: null
  },
  mutations: {
    initDetailData(state, data) {
      state.detailData = data
    }
  },
  actions: {},
  getters: {},
}