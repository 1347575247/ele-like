<template>
  <div class="benefit">
    <vHead title="订单已送达" @back="back" class="header">
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

</style>