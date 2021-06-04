
export default {
  namespaced: true,
  state: () => ({
    goods: {
    }
  }),
  mutations: {
    addGoods(state, item) {
      console.log(item)
    }
  },
  actions: {},
  getters: {
  },
}