<template>
  <div class="login">
    <div class="tag">
      <img src="~@/assets/tologin.png" alt="">
    </div>
    <div class="wrap">
      <p class="no-res">没有结果</p>
      <p class="notice">登录后查看更多商家</p>
      <van-button type="success">登录</van-button>
    </div>
    
    
  </div>
</template>

<script>

import toLoginModel from './js/toLoginModel'
import {Button} from 'vant'

export default {
  components: {
    [Button.name]: Button
  },
  setup() {
    const {} = toLoginModel()
    
    return {

    }
  }
}

</script>


<style lang="scss" scoped>
.login {
  .tag{
    img {
      display: block;
      margin: 1.052632rem auto 0.526316rem;
      width: 60%;
    }
    
  }
  .wrap {
    text-align: center;
    width: 8.421053rem;
    margin: 0 auto;
    margin-bottom: 1.736842rem;
  }
}

</style>