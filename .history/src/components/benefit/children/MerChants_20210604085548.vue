<template>
  <div class="merchants">
    <van-coupon-list
      :coupons="state.coupons"
      :chosen-coupon="state.chosenCoupon"
      :disabled-coupons="disabledCoupons"
      @exchange="onExchange"
    />
  </div>
</template>

<script>
  import { CouponCell, CouponList, Cell, Button, Tab, Tabs } from 'vant';
  import merchantsModel from './js/merchantsModel'

  export default {
    components: {
      [CouponCell.name]: CouponCell,
      [Cell.name]: Cell,
      [CouponList.name]: CouponList,
      [Button.name]: Button,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
    },
    setup() {
      const {state, onChange, onExchange, disabledCoupons} = merchantsModel()

      return {
        state,
        onChange,
        onExchange,
        disabledCoupons
      }
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