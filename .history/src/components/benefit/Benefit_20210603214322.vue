<template>
  <div class="benefit">
    <vHead title="我的优惠" @back="$router.push('/mine')" class="header">
      <template v-slot:right>
        <div class="right">
          <span class="iconfont">兑换红包</span>
        </div>
      </template>
    </vHead>
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  import { Tab, Tabs } from 'vant';

  export default {
    components: {
      vHead,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
    },
    setup() {

    }
  }
</script>

<style lang="scss" scoped>
  .right {
    .iconfont {
      font-size: 0.394737rem;
    }
  }
</style>