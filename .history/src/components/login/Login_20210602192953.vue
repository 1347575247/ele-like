<template>
  <div class="login">
    <div class="tag">
      <img src="~@/assets/ele.png" alt="">
    </div>
    
  </div>
</template>

<script>
import { Form, Field, Cell } from 'vant';

export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Cell.name]: Cell,
  },
  setup() {

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