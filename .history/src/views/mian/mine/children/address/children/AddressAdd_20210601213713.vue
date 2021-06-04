<template>
  <div class="b-background">
    <vHead title="添加地址" @back="back"></vHead>
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import vHead from '@comps/header/Header.vue'
import addModel from './js/addModel'
// import { Form, Field } from 'vant'

export default {
  components: { 
    vHead,
    // [Form.name]: Form,
    // [Field.name]: Field,
  },
  setup(props, context) {
    const { back, state, onSubmit } = addModel()

    return {
      back,
      state,
      onSubmit
    }
  },
}
</script>

<style lang="scss" scoped></style>
