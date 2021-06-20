
const formatData = (state, key)=> {
  if(state.detailData) {
    return state.detailData[key]
  }
  return null
}

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
      return formatData(state, 'rst')
    },
    bought_list(state) {
      return formatData(state, 'bought_list')
    },
    menu(state) {
      return formatData(state, 'menu')
    },
    recommend(state) {
      return formatData(state, 'recommend')
    },
    redpack(state) {
      return formatData(state, 'redpack')
    },
    user(state) {
      return formatData(state, 'user')
    }
  },
}