<template>
  <div class="redpacks p-spacing">
    <div class="card">
      <div class="l-text">
        <span class="iconfont icon-gift__easyico"></span>
        <span>推荐有奖</span>
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
      .icon-gift__easyico {
        color: rgb(252, 123, 83);
        font-size: 0.473684rem;
      }
    }
  }
</style>