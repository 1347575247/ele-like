<template>
  <div class="b-background">
    <vHead title="添加地址" @back="back"></vHead>
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="联系人"
        label="联系人"
        maxlength="50"
        placeholder="联系人"
        :rules="[{ required: true, message: '请填写联系人' }]"
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
import { Form, Field, Cell, Button } from 'vant'

export default {
  components: { 
    vHead,
    [Form.name]: Form,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [Button.name]: Button,
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
