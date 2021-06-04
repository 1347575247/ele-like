import { Sidebar, SidebarItem } from 'vant';
import { ref } from 'vue'
import { Toast } from 'vant';

function MenuModel() {
  const active = ref(0);
  const onChange = (index) => Toast(`标签名 ${index + 1}`);
  return {
    active,
    onChange,
  };
}


export default MenuModel