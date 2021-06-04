

export default {
  namespaced: true,
  state: () => {
    detailData: null
  },
  mutations: {
    initDetailData(state, data) {
      console.log(data)
      state.detailData = data
    }
  },
  actions: {},
  getters: {
    
  },
}