

export default {
  namespaced: true,
  state: () => ({
    detailData: null
  }),
  mutations: {
    // 设置detailData的值
    initDetailData(state, data) {
      state.detailData = data
    }
  },
  actions: {},
  getters: {
    rst(state) {
      let rst;
      if(state.detailData) {
        rst = JSON.parse(state.detailData.rst.body)
      }
      return rst ? rst : null
    }
  },
}