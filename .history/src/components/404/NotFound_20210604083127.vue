<template>
  <div>
    <div class="b-background"></div>
    <div class="not-found">	
      <div class="erimg">
        <img src="~@/assets/erimg.png" alt="">
      </div>
      <p class="ertitle">亲爱的用户</p>
      <p class="ertext">目前该页面功能正在开发</p>
      <p class="ertext">如有疑问请联系程序猿小哥</p>
      <p class="ertext">感谢您的配合！</p>
      <p class="ertext ">点击返回</p>
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
      padding: 2.098421rem 0;
      img {
        width: 66%;
        margin: auto;
        display: block;
      }
    }
    .ertitle {
      font-size: 0.605263rem; // 23
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.526316rem;
    }
    .ertext {
      margin-bottom: 0.406316rem;
      font-size: 0.473684rem;
      text-align: center;
    }
  }
</style>
