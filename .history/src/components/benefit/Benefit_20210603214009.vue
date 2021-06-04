<template>
  <div class="benefit">
    <vHead title="我的优惠" @back="$router.push('/mine')" class="header">
      <template v-slot:right>
        <div class="right">
          <span class="iconfont">兑换红包</span>
        </div>
      </template>
    </vHead>
  </div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  
  export default {
    components: {
      vHead
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