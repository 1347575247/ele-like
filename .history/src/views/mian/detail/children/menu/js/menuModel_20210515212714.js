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
    menu: computed(() => {
      return $store.getters['detail/menu']
    })
    recommend: computed(() => {
      return $store.getters['detail/recommend']
    })
  })


  return {
    ...toRefs(data)
  }
}


export default MenuModel