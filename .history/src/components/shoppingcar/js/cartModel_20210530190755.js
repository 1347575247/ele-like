import {reactive, toRefs, computed} from 'vue'
import {useStore} from 'vuex'

export default function cartModel(props) {
  const $store = useStore()
  const data = reactive({
    // 加购状态
    foodState: computed(() => {
      return $store.state.cart.foods
    }),
    // 用户加购的当前商家的商品信息
    state: computed(() => {
      return data.foodState[props.resId]
    }),
  })

  console.log(data)

  return {
    ...toRefs(data)
  }
}