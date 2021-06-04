<template>
  <div class="b-background">
    <vHead title="我的地址" @back="back"></vHead>

    <!-- 地址栏 -->
    <ul class="addr-cont ">
      <li class="addr-item p-spacing">
        <div class="personal">
          <span class="name">陈蓓都</span>
          <span class="gender">先生</span>
          <span class="mobile">13276849873</span>
        </div>
        <div class="addr-info">
          <div class="label">学校</div>
          <span class="addr">广东省汕尾市陆丰市玄武路与邮政路交叉口西南150米金华庭A栋12楼1204房</span>
          <div class="editor">
            <span class="edit iconfont iconedit"></span>
            <span class="delete iconfont iconshanchu"></span>
          </div>
        </div>
      </li>
      <li class="addr-item p-spacing">
        <div class="personal">
          <span class="name">陈蓓都</span>
          <span class="gender">先生</span>
          <span class="mobile">13276849873</span>
        </div>
        <div class="addr-info">
          <div class="label">学校</div>
          <span class="addr">广东省汕尾市陆丰市玄武路与邮政路交叉口西南150米金华庭A栋12楼1204房</span>
          <div class="editor">
            <span class="edit iconfont iconedit"></span>
            <span class="delete iconfont iconshanchu"></span>
          </div>
        </div>
      </li>
      <li class="addr-item p-spacing">
        <div class="personal">
          <span class="name">陈蓓都</span>
          <span class="gender">先生</span>
          <span class="mobile">13276849873</span>
        </div>
        <div class="addr-info">
          <div class="label">学校</div>
          <span class="addr">广东省汕尾市陆丰市玄武路与邮政路交叉口西南150米金华庭A栋12楼1204房</span>
          <div class="editor">
            <span class="edit iconfont iconedit"></span>
            <span class="delete iconfont iconshanchu"></span>
          </div>
        </div>
      </li>
    </ul>

    <!-- 新增收货地址 -->
    <div class="add-addr">
      <!-- <router-link :to='{name:"addAddr"}'> -->
        <span class="iconfont icontianjia"></span>
        <span>新增收货地址</span>
      <!-- </router-link> -->
      
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  import vHead from '@comps/header/Header.vue'
  import addressModel from './js/addressModel'
  
  export default {
    components: {vHead},
    setup(props, context) {

      const { back } = addressModel()

      return {
        back
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-background {
    position: absolute;
    height: 100%;
    z-index: 1000;
  }
  .addr-cont {
    
    .addr-item {
      height: 2.2rem;
      padding-top: 0.315789rem;
      border-bottom: 1px solid #ddd;
      background-color: #fff;
      color: #666;
      .personal {
        .name {
          color: #000;
          font-weight:700;
        }
        span {
          font-size: 0.473684rem;
          margin-right: 0.184211rem;
        }
      }
      .addr-info{
        margin-top: 0.131579rem;
        position: relative;
        .label {
          display: inline-block;
          padding: 0.036316rem 0.082632rem;
          background-color: rgba(0, 255, 0, .005);
          color: #00d762;
          border: 1px solid #00d762;
          vertical-align: middle;
          -webkit-transform: scale(.8);
          transform: scale(.8);
        }
        .addr {
          display: inline-block;
          max-width:70%;
          vertical-align: middle;
          margin-left: 0.131579rem;
          font-size:0.368421rem;
        }
        .editor {
          position: absolute;
          right: 0;
          top: 0.263158rem;
          span {
            margin-right: 0.357895rem;
            color: #dddfdf;
          }
        }
      }
    }
  }

  .add-addr{
    position: fixed;
    height: 1.394737rem;
    bottom: 0;
    background: #fff;
    left: 0;
    right: 0;
    line-height: 1.394737rem;
    // 居中
    display: flex;
    justify-content: center;
    span {
      margin: 0 0.157895rem;
      font-size: 0.447368rem;
      color: #3190e8;
    }
  }
</style>