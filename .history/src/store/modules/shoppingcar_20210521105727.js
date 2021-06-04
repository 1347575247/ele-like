
export default {
  namespaced: true,
  state: () => ({
    foods: {
    }
  }),
  mutations: {
    addFood(state, item) {
      const foodInfo = {
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
          state.foods[martId][foodsId] = foodInfo
          /* 总数+1 */
          state.foods[martId].total++

        }
        
      }
      /* 商家id不存在state.goods时，直接初始化 */
      else {
        state.foods[martId] = {
          total: 1,
          [foodsId]: foodInfo
        }
      }
      console.log(state.foods)
    },
    /* 减少 */
    reduceFood(state, item) {
      const martId = item.restaurant_id
      const foodsId = item.specfoods[0].food_id
      /* 当购物车存在该食品时才执行减操作 */
      console.log(state.foods[martId][foodsId])
      if(state.foods[martId][foodsId]){
        /* 如果数量小于等于0则直接删除该食品对象 */
        if(state.foods[martId][foodsId].count <= 0) {
          delete state.foods[martId][foodsId]
        }else{
          /* 单品数量+1 */
          state.foods[martId][foodsId].count -= 1
          /* 总数+1 */
          state.foods[martId].total -= 1
        }
      }
      
      
      
      console.log(state.foods)
    }
  },
  actions: {},
  getters: {
  },
}