import { Sidebar, SidebarItem } from 'vant';
import { ref, reactive, onMounted } from 'vue'
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

  })

  onMounted(() => {
    
  })
  menu = computed(() => {
    return $store.getters['detail/menu']
  })

  return {

  }
}


export default MenuModel