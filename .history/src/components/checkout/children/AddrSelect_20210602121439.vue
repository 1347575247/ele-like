<template>
  <div>
    <vHead v-fixed title="选择收货地址" @back="$router.back()">
    </vHead>
    选择地址
  </div>
</template>

<script>
  import addrSModel from './js/addrSModel'
  export default {
    
    setup() {
      const {} = addrSModel()
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>