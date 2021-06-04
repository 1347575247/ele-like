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
      <ul class="safety-list">
        <li class="item">
          <p class="item-title p-spacing">账号绑定</p>
          <div class="item-content p-spacing">
            <div class="l-text">
              <span class="iconfont icon-phone1"></span>
              <span class="phone-text">手机</span>
            </div>
            <div class="r-val">
              132****2053
              <span class="iconfont icon-right"></span>
            </div>
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
        padding-top: 0.263158rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        .l-text {
          font-size: 0.421053rem;
          font-weight: 700;
          line-height: 1.536842rem;
        }
        img {
          width: 1.536842rem;
          border-radius: 50%;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
        .icon-right {
          font-size: 0.566316rem;
          opacity: .6;
          margin-top: -0.078947rem;
          vertical-align: middle;
          display: inline-block;
        }
        .r-val {
          line-height: 1.536842rem;
          font-size: 0.421053rem;
          
        }
        
      }
    }
    .safety-list {
      .item {
        p {
          margin: 0.394737rem 0;
          opacity: .6;
        }
        .item-content {
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          padding: 0.342105rem;
        }
      }
      
    }
  }
</style>