

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
    rst(state) {
      console.log(state.detailData)
      const rst = JSON.parse(state.detailData.body)
      console.log(rst)
      return rst
    }
  },
}