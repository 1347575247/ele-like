
export default {
  namespaced: true,
  state: () => ({
    foods: {
    }
  }),
  mutations: {
    addGoods(state, item) {
      console.log(item)
      const martId = item.restaurant_id
      const foodsId = item.restaurant
      /* 当商家id已存在state.goods时 */
      if(martId in state.foods) {
        
      }
      else {
        
      }
    }
  },
  actions: {},
  getters: {
  },
}