<template>
  <div class="menu-list">
    <van-sidebar v-model="active" @change="onChange">
      <van-sidebar-item title="标签名 1" />
      <van-sidebar-item title="标签名 2" />
      <van-sidebar-item title="标签名 3" />
    </van-sidebar>
    aaa
  </div>
</template>

<script>
import { Sidebar, SidebarItem } from 'vant';
import menuModel from './js/menuModel'
export default {
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  setup(props, ctx) {
    const {active, onChange} = menuModel()
    return {
      active,
      onChange,
    }
  }
}
</script>

<style>

</style>