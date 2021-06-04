import {reactive, toRefs, computed, watch} from 'vue'
import {useStore} from 'vuex'

export default function cartModel(props) {
  const $store = useStore()
  const data = reactive({
    /* 动画类名 */
    animateName: '',
    // 加购状态
    foodState: computed(() => {
      return $store.state.cart.foods
    }),
    // 用户加购的当前商家的商品信息
    state: computed(() => {
      return data.foodState[props.resId]
    }),
    // 总数据条数
    total: computed(() => {
      return data.state && data.state.total || 0
    }),
    cartOk: computed(() => {
      return data.total > 0
    }),
    rst:computed(()=>{
			return $store.getters.rst
		}),
  })

  watch(() => data.total, (n, o) => {
    if(n > o) {
      data.animateName = 'car 0.3s'

      /* 重置动画 */
      setTimeout(() => {
        data.animateName = ''
      },300)
    }
  }, {
    immediate: true,
    deep: true
  })

  // const totalPrice = computed(() => {
  //   let origin_price = 0,
  //       price = 0;
  //   if(data.state) {
  //     Object.keys(data.state).forEach(key => {
  //       origin_price += data.state[key].original_price
  //       price += data.state[key].price
  //     })
  //     console.log(origin_price, price)
  //   }
  // })

  return {
    ...toRefs(data)
  }
}