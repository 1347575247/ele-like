<template>
  <div class="b-background">
    <vHead title="添加地址" @back="back"></vHead>

  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import vHead from '@comps/header/Header.vue'
  import addModel from './js/addModel'
  
  export default {
    components: {vHead},
    setup(props, context) {

      const { back } = addModel()

      return {
        back
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>