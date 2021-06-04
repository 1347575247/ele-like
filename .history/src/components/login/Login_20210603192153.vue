<template>
  <div class="login">
    <div class="tag">
      <img src="~@/assets/ele.png" alt="">
    </div>
    
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="初始用户名root"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="初始密码root"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    
  </div>
</template>

<script>
import { Form, Field, Cell, Button, Toast, Popup, Icon } from 'vant';
import loginModel from './js/loginModel'

export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
  },
  setup() {
    const { state, onSubmit } = loginModel()
    
    return {
      state,
      onSubmit
    }
  }
}

</script>

<style lang="scss">
.van-cell {
  .van-field__label {
    display: block;
    width: 1.894737rem;
    flex: 0 1 auto;
  }
}
  
</style>
<style lang="scss" scoped>
  .van-popup {
    background-color: rgba(0,0,0,.7);
  }
  .tag{
    img {
      display: block;
      margin: 1.052632rem auto 0.526316rem;
      width: 40%;
    }
    
  }
</style>