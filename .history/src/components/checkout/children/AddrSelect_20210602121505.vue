<template>
  <div>
    <vHead v-fixed title="选择收货地址" @back="$router.back()">
    </vHead>
    选择地址
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

</style>