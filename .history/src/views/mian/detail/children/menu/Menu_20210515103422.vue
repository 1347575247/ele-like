<template>
  <div class="menu-list">
    <van-row justify="space-around">
      <van-col span="5">
        <van-sidebar v-model="active" @change="onChange">
          <van-sidebar-item title="标签名 1" />
          <van-sidebar-item title="标签名 2" />
          <van-sidebar-item title="标签名 3" />
        </van-sidebar>
      </van-col>
      <van-col span="19" :style="{background: 'red'}">span: 18</van-col>
    </van-row>
    
  </div>
</template>

<script>
import { Sidebar, SidebarItem, Col, Row } from 'vant';
import menuModel from './js/menuModel'
export default {
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Col.name]: Col,
    [Row.name]: Row,
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