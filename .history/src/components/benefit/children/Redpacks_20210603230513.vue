<template>
  <div class="redpacks p-spacing">
    <div class="card">
      <div class="l-text">
        <span class="iconfont icon-gift__easyico"></span>
        <span>推荐有奖</span>
      </div>
      <div class="r-val">
        <span>15元现金拿不停</span>
        <span class="iconfont icon-right"></span>
      </div>
    </div>

    <div class="no-redpacks">
      <img src="~@/assets/no-redpacks.gif" alt="">
    </div>

    <p class="notice-1">没有红包</p>
    <p class="notice-2">快去抢几个吧</p>

    <p class="other">
      <span>查看历史红包</span>
      <span>|</span>
      <span>红包说明</span>
    </p>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @mixin common-background {
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
  }
  .redpacks {
    @include common-background;
    .card {
      display: flex;
      justify-content: space-between;
      .icon-gift__easyico {
        color: rgb(252, 123, 83);
        font-size: 0.473684rem;
        margin-right: 0.157895rem;
      }
      
      .r-val {
        -webkit-transform: scale(.9);
          transform: scale(.9);
          margin-top: 0.133158rem;
        span {
          font-size: 0.168421rem;
          vertical-align: middle;
          
        }
        
      }
    }
    .no-redpacks {
      img {
        display: block;
        width: 55%;
        margin: 0 auto;
        margin-top: 1.826316rem;
      }
    }
    .notice-1 {
      font-size: 0.421053rem;
      opacity: .8;
      text-align: center;
      margin-top: 0.394737rem;
    }
    .notice-2 {
      font-size: 0.368421rem;
      opacity: .6;
      text-align: center;
      transform: scale(.8);
      margin-top: 0.194737rem;
    }
    .other {
      font-size: 0.368421rem;
      opacity: .6;
      text-align: center;
      transform: scale(.5);
      span {
        display: inline-block;
        margin: 0 0.105263rem;
      }
      margin-top: 0.194737rem;
      
    }
  }
</style>