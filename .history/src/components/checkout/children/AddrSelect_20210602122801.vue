<template>
  <div>
    <div class="b-background"></div>
    <div class="addr-select">
      <vHead v-fixed title="选择收货地址" @back="$router.back()">
      </vHead>
      <div class="main p-spacing">
        <div class="card">
          <ul class="addr-list">
            <li class="addr-item">
              <p class="address">尚品铂家酒店(挂绿广场瑞祥店)</p>
              <p class="detail">3楼322房</p>
              <p class="info">蔡伦多(先生) 12343312342</p>
            </li>
          </ul>
          
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
      .addr-list {
        .addr-item {
          .address {
            font-size: 0.394737rem;
          }
        }
      }
    }
  }
}
</style>