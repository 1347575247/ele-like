<template>
  <div>
    <div class="b-background"></div>
    <div class="not-found">	
      <div class="erimg">
        <img src="~@/assets/erimg.png" alt="">
      </div>
      <p class="ertitle">亲爱的用户</p>
      <p class="ertext">目前积分商城正在升级</p>
      <p class="ertext">如有疑问请联系APP官方客服</p>
      <p class="ertext">感谢您的配合！</p>
    </div>
  </div>
  
</template>
<script>
  export default {
    props: {
    }
  }
</script>
<style lang="scss">
  .not-found {
    position: relative;
    z-index: 10;
    .erimg {

      img {
        width: 1.315789rem;
      }
    }
  }
</style>
