<template>
  <div class="b-background">
    <vHead title="修改地址" @back="back"></vHead>
    <van-form @submit="onSubmit">
      <!-- 姓名 -->
      <van-field
        v-model="state.username"
        name="name"
        label="联系人"
        placeholder="联系人"
        :rules="[{ required: true, message: '请填写联系人' }]"
      />
      <!-- 性别 -->
      <van-field name="gender" label=" ">
        <template #input>
          <van-radio-group v-model="state.checked" direction="horizontal">
            <van-radio name="先生">先生</van-radio>
            <van-radio name="女士">女士</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <!-- 手机号 -->
      <van-field
        v-model="state.mobile"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <!-- 选择地址项 -->
      <van-field
        v-model="state.baseAddr"
        readonly
        clickable
        name="baseAddr"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="state.showArea = true"
      />
      <!-- 详细地址项 -->
      <van-field
        v-model="state.detailAddr"
        rows="2"
        autosize
        label="详细地址"
        type="textarea"
        maxlength="50"
        placeholder="请输入详细地址"
        show-word-limit
        name="detailAddr"
      />
      <!-- 选择地址弹出层 -->
      <van-popup v-model:show="state.showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirm"
          @cancel="state.showArea = false"
        />
      </van-popup>
      <van-field name="tag" label="标签">
        <template #input>
          <van-radio-group v-model="state.addrLabel" direction="horizontal">
            <van-radio name="home">家</van-radio>
            <van-radio name="school">学校</van-radio>
            <van-radio name="company">公司</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          确定
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import vHead from '@comps/header/Header.vue'
import addModel from './js/addModel'
import { Form, Field, Cell, Button, RadioGroup, Radio, Area, Popup, Overlay, Picker } from 'vant'

export default {
  components: {
    vHead,
    [Form.name]: Form,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Area.name]: Area,
    [Popup.name]: Popup,
    [Overlay.name]: Overlay,
    [Picker.name]: Picker,

  },
  setup(props, context) {
    const { back, state, onSubmit, onConfirm, areaList, nowEditItem } = addModel()

    return {
      back,
      state,
      onSubmit,
      onConfirm,
      areaList,
      nowEditItem
    }
  },
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
<style lang="scss" scoped></style>
