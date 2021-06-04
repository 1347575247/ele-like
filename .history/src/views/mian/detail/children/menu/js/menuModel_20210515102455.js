import { Sidebar, SidebarItem } from 'vant';
import { ref } from 'vue'
import { Toast } from 'vant';

function MenuModel() {
  const state = reactive({
    activeId: 1,
    activeIndex: 0,
  });
  const items = [
    {
      text: '浙江',
      children: [
        { text: '杭州', id: 1 },
        { text: '温州', id: 2 },
      ],
    },
    {
      text: '江苏',
      children: [
        { text: '南京', id: 5 },
        { text: '无锡', id: 6 },
      ],
    },
  ];

  return {
    state,
    items,
  }
}


export default MenuModel