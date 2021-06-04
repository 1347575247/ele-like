<template>
  <div class="b-background">
    <vHead title="我的地址" @back="back"></vHead>

    <!-- 地址栏 -->
    <ul class="addr-cont" v-if="addressList">
      <li class="addr-item p-spacing" v-for="(item,i) in addressList" :key="i">
        <div class="personal">
          <span class="name">{{item.name}}</span>
          <span class="gender">{{item.gender}}</span>
          <span class="mobile">{{item.mobile}}</span>
        </div>
        <div class="addr-info">
          <div class="label" :class="item.tag?item.tag:''" v-if="item.tag !== ''">
            {{item.tag==='home'?'家':item.tag==='school'?'学校':item.tag==='company'?'公司':'未选择'}}
          </div>
          <span class="addr">{{item.baseAddr+item.detailAddr}}</span>
          <div class="editor">
            <span class="edit iconfont icon-icon-bainji" @click="toAddressEdit(item)"></span>
            <span class="delete iconfont icon-fork"></span>
          </div>
        </div>
      </li>
    </ul>

    <!-- 新增收货地址 -->
    <div class="add-addr" @click="toAddressAdd">
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

      const { back, toAddressAdd, addressList, toAddressEdit } = addressModel()

      return {
        back,
        toAddressAdd,
        addressList,
        toAddressEdit
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
          background-color: rgba(0, 0, 255, .005);
          color: #3190e8;
          border: 1px solid #3190e8;
          vertical-align: middle;
          -webkit-transform: scale(.8);
          transform: scale(.8);
          &.home {
            content: '家';
            background-color: rgba(255, 0, 0, .005);
            color: #ff5722;
            border: 1px solid #ff5722;
          }
          &.school {
            content: '学校';
            background-color: rgba(0, 255, 0, .005);
            color: #00d762;
            border: 1px solid #00d762;
          }
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
          top: 0;
          span {
            margin-right: 0.357895rem;
            color: rgba(0,0,0,.5);
            font-size: 0.491053rem;
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