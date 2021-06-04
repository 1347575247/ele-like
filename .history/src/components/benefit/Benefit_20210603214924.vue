<template>
  <div class="benefit">
    <vHead title="我的优惠" @back="$router.push('/mine')" class="header">
      <template v-slot:right>
        <div class="right">
          <span class="iconfont">兑换红包</span>
        </div>
      </template>
    </vHead>
    <van-tabs 
      v-model:active="active"
      background='linear-gradient(90deg, #00aaff, #0085ff)'
      color="white"
      title-active-color="white"
      title-inactive-color="rgba(255, 255, 255, .5)"
    >
      <van-tab>
        <template #title> <van-icon name="more-o" />选项 </template>
        红包
      </van-tab>
      <van-tab title="店铺红包">店铺红包</van-tab>
      <van-tab title="抵用券">抵用券</van-tab>
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