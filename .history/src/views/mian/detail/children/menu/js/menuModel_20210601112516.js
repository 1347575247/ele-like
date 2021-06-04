import { Sidebar, SidebarItem } from 'vant';
import { ref, reactive, onMounted, computed, toRefs, getCurrentInstance } from 'vue'
import { Toast } from 'vant'; 
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

function MenuModel() {
  // const active = ref(0);
  // const onChange = (index) => Toast(`标签名 ${index + 1}`);
  // return {
  //   active,
  //   onChange,
  // };
  const $store = useStore()
  const {proxy} = getCurrentInstance()
  const nowRoute = useRoute()
  const restId = nowRoute.query.id

  const data = reactive({
    // 商品加购的信息
		foodState:computed(()=>{
			return $store.state.cart.foods;
		}),
    /* 菜单数据列表 */
    menu: computed(() => {
      return $store.getters['detail/menu']
    }),
    /* 商家推荐数据 */
    recommend: computed(() => {
      return $store.getters['detail/recommend']
    }),
    /* 商家数据 */
    rst: computed(() => {
      return $store.getters['detail/rst']
    })
  })

  function count(item){
    if(!item) return 0
		var 
			resId=item.restaurant_id,//商家id
			foodId=item.specfoods[0].food_id,//商品id
			// 找到当前商品对应商家的id
      res=data.foodState[resId],
      food;
			if(res){
				// 通过商品id 从 商家去拿取 商品信息
        food=res[foodId];
        // console.log(food);
				if(food){
					return food.count;
				}
			}
			return 0;
	}

  /* 将商家名称加到加购状态的对象钟 */
  function asignOther(item) {
    item.restaurant_name = data.rst.name
    console.log(data.rst)
    return item
  }

  const changeNum = (item, bool) => {
    console.log(data.foodState)
    /* 添加食品到购物车 */
    if(bool) {
      $store.commit('cart/addFood',item)
    }
    /* 减少食品数量 */
    else {
      $store.commit('cart/reduceFood',item)
    }
  }

  

  return {
    ...toRefs(data),
    changeNum,
    count,
    asignOther
  }
}


export default MenuModel