
export default {
  namespaced: true,
  state: () => ({
    foods: {
    }
  }),
  mutations: {
    addFood(state, item) {
      const goodsInfo = {
        name: item.name,
        original_price: item.specfoods[0].original_price || null,
        price: item.specfoods[0].price,
        count: 1
      }
      const martId = item.restaurant_id
      const foodsId = item.specfoods[0].food_id
      // const name
      /* 当商家id已存在state.goods时 */
      if(martId in state.foods) {
        /* 当前食品已经有加购过 */
        if(foodsId in state.foods[martId]) {
          /* 直接让单品数+1 */
          state.foods[martId][foodsId].count++
          /* 总数+1 */
          state.foods[martId].total++
        }
        /* 当前食品未加购过 */
        else {
          /* 初始化 */
          state.foods[martId][foodsId] = goodsInfo
          /* 总数+1 */
          state.foods[martId].total++

        }
        
      }
      /* 商家id不存在state.goods时，直接初始化 */
      else {
        state.foods[martId] = {
          total: 1,
          [foodsId]: goodsInfo
        }
      }
      console.log(state.foods)
    },
    /* 减少 */
    reduceFoods(state, item) {

    }
  },
  actions: {},
  getters: {
  },
}