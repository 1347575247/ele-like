<template>
  <div>
    <div class="b-background"></div>
    <div class="addr-select">
      <vHead v-fixed title="选择收货地址" @back="$router.back()">
      </vHead>
      <div class="main p-spacing">
        <div class="card">
          <ul class="addr-list">
            <li class="addr-item home">
              <p class="address">尚品铂家酒店(挂绿广场瑞祥店)</p>
              <p class="detail">3楼322房</p>
              <p class="info">蔡伦多(先生) 12343312342</p>
              <span class="iconfont icon-icon-bainji"></span>
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
          position: relative;
          margin-bottom: 0.736842rem;
          p {
            margin: 0.263158rem 0;
          }
          .address {
            font-size: 0.394737rem;
            font-weight: 600;
          }
          .info {
            opacity: .6;
          }
          .icon-icon-bainji {
            position: absolute;
            right: 0.694737rem;
            font-size: 0.631579rem;
            opacity: .6;
            top: 0.494737rem;
          }
          &.home {
            &::after {
              position: absolute;
              content: '家';
              top: 0.494737rem;
              right: 2.394737rem;
              background:#ffedeb;
              color: #ff4b33;
            }
          }
        }
      }
    }
  }
}
</style>