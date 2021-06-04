

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
      if(state.detailData) {
        const rst = JSON.parse(state.detailData.body)
        console.log(rst)
      }
      return rst ? rst : null
    }
  },
}