<template>
  <div class="login">
    <div class="tag">
      <img src="~@/assets/tologin.png" alt="">
    </div>

    
  </div>
</template>

<script>

import toLoginModel from './js/toLoginModel'

export default {
  components: {

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
      width: 40%;
    }
    
  }
</style>