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
      <van-col span="19">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </template>
        </van-card>
      </van-col>
    </van-row>
    
  </div>
</template>

<script>
import { Sidebar, SidebarItem, Col, Row, Card } from 'vant';
import menuModel from './js/menuModel'
export default {
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Col.name]: Col,
    [Row.name]: Row,
    [Card.name]: Card,
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