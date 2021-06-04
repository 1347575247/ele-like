<template>
  <div class="login">
    <div class="tag">
      <img src="~@/assets/tologin.png" alt="">
    </div>
    <p class="no-res">没有结果</p>
    <p class="notice">登录后查看更多商家</p>
    
    
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
.tag{
    img {
      display: block;
      margin: 1.052632rem auto 0.526316rem;
      width: 60%;
    }
    
  }
</style>