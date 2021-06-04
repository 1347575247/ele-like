<template>
  <div>
    <div class="b-background"></div>
    <div class="addr-select">
      <vHead v-fixed title="选择收货地址" @back="$router.back()">
      </vHead>
      <div class="main p-spacing">
        <div class="card">
          11
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import addrSModel from './js/addrSModel'
  import vHead from '@comps/header/Header.vue'
  export default {
    components: {
      vHead
    },
    setup() {
      const {} = addrSModel()
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.addr-select {
  position: relative;
  z-index: 10;
  .main {
    padding-top: 0.394737rem;
    .card {
      padding: 0.394737rem 0.263158rem;
    }
  }
}
</style>