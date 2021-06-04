<template>
  <div class="merchants">
    店铺红包
  </div>
</template>

<script>
  import { CouponCell, CouponList } from 'vant';

  export default {
    components: {
      [CouponCell.name]: CouponCell,
      [CouponList.name]: CouponList
    },
    setup() {

    }
  }
</script>

<style lang="scss" scoped>
  @mixin common-background {
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
  }
  
  .merchants {
    @include common-background;

  }
</style>