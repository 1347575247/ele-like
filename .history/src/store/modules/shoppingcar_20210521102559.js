
export default {
  namespaced: true,
  state: () => ({
    foods: {
    }
  }),
  mutations: {
    addGoods(state, item) {
      // console.log(item)
      const goodsInfo = {
        name: item.name,
        original_price: item.specfoods[0].original_price || null,
        price: item.specfoods[0].price,
        count: 1
      }
      const martId = item.restaurant_id
      const foodsId = item.restaurant
      // const name
      /* 当商家id已存在state.goods时 */
      if(martId in state.foods) {
        
      }
      else {
        state.foods[martId] = {
          total: 1,
          [foodsId]: goodsInfo
        }
      }
      console.log(state.foods)
    }
  },
  actions: {},
  getters: {
  },
}