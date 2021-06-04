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
        span {
          font-size: 0.268421rem;
          vertical-align: middle;
        }
        
      }
    }
  }
</style>