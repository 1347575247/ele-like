<template>
  <div>
    <div class="b-background"></div>
    <div class="info">
      <ul class="info-list">
        <li class="info-item p-spacing">
          <span class="l-text">头像</span>
          <div>
            <img src="~@/assets/head-icon.png" alt="">
            <span class="iconfont icon-right"></span>
          </div>
        </li>
        <li class="info-item p-spacing">
          <span class="l-text">头像</span>
          <div class="r-val">
            {{personInfo.username}}
            <span class="iconfont icon-right"></span>
          </div>
        </li>
      </ul>
      <ul class="safety-list">
        <li class="item">
          <p class="item-title p-spacing">账号绑定</p>
          <div class="item-content p-spacing">
            <div class="l-text">
              <span class="iconfont icon-phone1"></span>
              <span class="phone-text common">手机</span>
            </div>
            <div class="r-val">
              <span class="value">{{secretMobile(personInfo.mobile)}}</span> 
              <span class="iconfont icon-right"></span>
            </div>
          </div>
        </li>
        <li class="item">
          <p class="item-title p-spacing">安全设置</p>
          <div class="item-content p-spacing">
            <div class="l-text">
              <span class="common">登录密码</span>
            </div>
            <div class="r-val">
              <span class="passwd">未设置</span>
              <span class="iconfont icon-right"></span>
            </div>
          </div>
        </li>
      </ul>
      <button class="logout" @click="logout">退出登录</button>
    </div>
  </div>
  
</template>

<script>
  import infoModel from './js/infoModel'
  import {Popup, Toast, Icon, Dialog, Overlay } from 'vant'
  import personModel from '@views/mian/mine/js/personModel'
  export default {
    components: {
      [Popup.name]:Popup,
      [Toast.name]:Toast,
      [Icon.name]:Icon,
      [Dialog.name]:Dialog,
      [Overlay.name]:Overlay,
    },
    setup() {
      const {logout} = infoModel()
      const {personInfo, secretMobile} = personModel()

      return {
        logout,
        personInfo,
        secretMobile
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    position: relative;
    z-index: 10;
    .info-list {
      .info-item {
        padding-top: 0.263158rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        .l-text {
          font-size: 0.421053rem;
          font-weight: 700;
          line-height: 1.536842rem;
        }
        img {
          width: 1.536842rem;
          border-radius: 50%;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
        .icon-right {
          font-size: 0.566316rem;
          opacity: .6;
          margin-top: -0.078947rem;
          vertical-align: middle;
          display: inline-block;
        }
        .r-val {
          line-height: 1.536842rem;
          font-size: 0.421053rem;
          
        }
        
      }
    }
    .safety-list {
      .item {
        p {
          margin: 0.394737rem 0;
          opacity: .6;
        }
        .item-content {
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          padding: 0.342105rem;
          .l-text {
            span {
              vertical-align: middle;
            }
            .icon-phone1 {
              color: #0097ff;
              font-size:0.578947rem;
            }
            .common {
              font-size: 0.421053rem;
            }
            .phone-text {
              font-weight: 700;
              margin-left: 0.131579rem;
            }
          }
          .r-val {
            font-size: 0.421053rem;
            height: 0.547368rem;
            line-height: 0.547368rem;
            * {
              vertical-align: middle;
            }
            .icon-right {
              font-size: 0.526316rem;
              opacity: 0.6;
            }
            .passwd {
              color:#0097ff;
            }
          }
        }
      }
      
    }
    .logout {
      background-color: #fff;
      width: 100%;
      text-align: center;
      padding: 0.426316rem;
      color: #ff5339;
      font-size: 0.421053rem;
      font-weight: 700;
      margin-top: 0.526316rem;
    }
  }
</style>