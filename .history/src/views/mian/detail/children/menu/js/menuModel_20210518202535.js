import { Sidebar, SidebarItem } from 'vant';
import { ref, reactive, onMounted, computed, toRefs } from 'vue'
import { Toast } from 'vant'; 
import { useStore } from 'vuex'

function MenuModel() {
  // const active = ref(0);
  // const onChange = (index) => Toast(`标签名 ${index + 1}`);
  // return {
  //   active,
  //   onChange,
  // };
  const $store = useStore()

  const data = reactive({
    /* 菜单数据列表 */
    menu: computed(() => {
      return $store.getters['detail/menu']
    }),
    /* 商家推荐数据 */
    recommend: computed(() => {
      return $store.getters['detail/recommend']
    }),
    /* 当前选择左侧菜单分类 */
    menu_index: 0
  })

  const menuSelect = i => {
    data.menu_index = i
    console.log(i)
  }


  return {
    ...toRefs(data),
    menuSelect
  }
}


export default MenuModel