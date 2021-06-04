<template>
  <div>
    <div class="b-background"></div>
    <div class="addr-select">
      <vHead v-fixed title="选择收货地址" @back="$router.back()">
      </vHead>
      <div class="main p-spacing">
        <div class="card">
          <ul class="addr-list">
            <li class="addr-item company">
              <p class="address">尚品铂家酒店(挂绿广场瑞祥店)</p>
              <p class="detail">3楼322房</p>
              <p class="info">蔡伦多(先生) 12343312342</p>
              <span class="iconfont icon-icon-bainji"></span>
            </li>
          </ul>
          <div class="add-addr">
            <span class="text">新增地址</span>
            <span class="iconfont icon-right"></span>
          </div>
        </div>
        <div class="card"></div>
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
              right: 1.794737rem;
              background:#ffedeb;
              color: #ff4b33;
              transform: scale(.9);
              -webkit-transform: scale(.9);
              padding: 0.078947rem 0.263158rem;
            }
          }
          &.company {
            &::after {
              position: absolute;
              content: '公司';
              top: 0.494737rem;
              right: 1.794737rem;
              background: #e6fafa;
              color: #04bbc8;
              transform: scale(.9);
              -webkit-transform: scale(.9);
              padding: 0.078947rem 0.263158rem;
            }
          }
          &.school {
            &::after {
              position: absolute;
              content: '学校';
              top: 0.494737rem;
              right: 1.794737rem;
              background: #eefae7;
              color: #59ce12;
              transform: scale(.9);
              -webkit-transform: scale(.9);
              padding: 0.078947rem 0.263158rem;
            }
          }
        }
      }
      .add-addr {
        display: flex;
        justify-content: space-between;
        .text {
          font-size:0.394737rem;
          color: #02b6fd;
        }
        .icon-right {
          font-size: 0.526316rem;
          opacity: .6;
        }
      }
    }
  }
}
</style>