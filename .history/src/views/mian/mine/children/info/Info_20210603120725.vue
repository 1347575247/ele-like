<template>
  <div>
    <div class="b-background"></div>
    <div class="info">
      <ul class="info-list">
        <li class="info-item p-spacing">
          <span class="l-text">头像</span>
          <div>
            <img src="~@/assets/head-icon.png" alt="">
            <span class="iconfont icon-right"></span>
          </div>
        </li>
        <li class="info-item p-spacing">
          <span class="l-text">头像</span>
          <div class="r-val">
            314603bc2
            <span class="iconfont icon-right"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .info {
    position: relative;
    z-index: 10;
    .info-list {
      .info-item {
        background: #fff;
        display: flex;
        justify-content: space-between;
        .l-text {
          font-size: 0.421053rem;
          font-weight: 700;
          line-height: 1.736842rem;
        }
        img {
          width: 1.736842rem;
          border-radius: 50%;
          vertical-align: middle;
        }
        .r-val {
         
          .icon-right {
            font-size: 0.566316rem;
            opacity: .6;
          }
          
        }
        
      }
    }
  }
</style>