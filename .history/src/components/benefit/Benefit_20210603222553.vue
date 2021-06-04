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
      <van-tab title="红包" badge="0">
        <router-view/>
      </van-tab>
      <van-tab title="店铺红包" badge="5">
        <router-view/>
      </van-tab>
      <van-tab title="抵用券" badge="2">
        <router-view/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  import { Tab, Tabs, Badge } from 'vant';
  import benefitModel from './js/benefitModel'

  export default {
    components: {
      vHead,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Badge.name]: Badge,
    },
    setup() {
      const { active } = benefitModel()

      return {
        active
      }
    }
  }
</script>

<style lang="scss" scoped>
.benefit{
  position: relative;
  z-index: 10;
}
  .right {
    .iconfont {
      font-size: 0.394737rem;
    }
  }
</style>