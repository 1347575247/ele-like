<template>
  <div class="offsets">
    <div class="no-offsets">
      <img src="~@/assets/no-offsets.gif" alt="">
    </div>

    <p class="notice-1">没有抵用卷</p>
    <p class="notice-2">快去抢几个吧</p>
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
  .offsets {
    @include common-background;

    .no-offsets {
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
  }

  
</style>