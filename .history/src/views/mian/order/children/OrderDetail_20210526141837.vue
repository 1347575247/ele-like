<template>
	<div class="order-detail">
    <div class="background"></div>
		<vHead title="订单已送达">
      <template v-slot:right>
        <div class="right">
          <span class="iconfont icon-kefu"></span>
        </div>
      </template>
    </vHead>

    <div class="main">
      <p class="order-state">订单已送达
        <span class="iconfont icon-right"></span>
      </p>

      <div class="aftet-sell">
        <div class="safety p-spacing">
          <span class="iconfont icon-dunpai"></span>
          <span>号码保护·食无忧</span>
          <span class="iconfont icon-right sm-font"></span>
        </div>
        <p class="p-spacing">感谢你对饿了么的信任，期待再次光临</p>
        <ul class="feedback p-spacing">
          <li class="item">
            <span class="iconfont icon-icon-test"></span>
            <span>评价得金币</span>
          </li>
          <li class="item">
            <span class="iconfont icon-phone"></span>
            <span>电话商家</span>
          </li>
          <li class="item">
            <span class="iconfont icon-qian"></span>
            <span>打赏骑士</span>
          </li>
        </ul>
      </div>

      <div class="insurance br-radius p-spacing">
        <div class="title">
          <span class="iconfont icon-dunpai"></span>
          <span>食品忧理赔申请</span>
          <span class="iconfont icon-right"></span>
        </div>
        <p>如发现食品变质，存在异物或引发就医，均可申请理赔</p>
      </div>

      <div class="detail br-radius p-spacing">

      </div>
      
    </div>
    
		
	</div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
	export default{
		components:{
      vHead,
		}
	}
</script>

<style lang="scss" scoped="scoped">
  .order-detail {
    .background {
      background-image:linear-gradient(180deg,hsla(0,0%,96.1%,0) 0,hsla(0,0%,96.1%,0) 27.466666666667vw,#f5f5f5 54.933333333333vw,#f5f5f5);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
    background-image: linear-gradient(
      180deg
      ,hsla(0,0%,96.1%,0) 0,hsla(0,0%,96.1%,0) 27.466666666667vw,#f5f5f5 54.933333333333vw,#f5f5f5);
    background-image: linear-gradient(
      180deg
      , #00abf5  0%, transparent 100%);
      position: fixed;
      bottom: 10.526316rem;
      top: 0;
      right: 0;
      left: 0;

      .main {
        position: relative;
        z-index: 3;
        padding: 0.394737rem 0.293158rem;
        .order-state {
          font-size: 0.626316rem;
          font-weight: 600;
          color: white;
          span {
            font-weight: 300;
            color: #fafafa;
            opacity: .7;
          }
        }
        .aftet-sell {
          margin: 0.365263rem 0;
          padding-top: 0.105263rem;
          padding-bottom: 0.305263rem;
          background-color:#fff;
          overflow: hidden;
          border-radius: 0.203158rem;
          width: 100%;
          .safety {
            color: #00abf5;
            font-size: 12px;
            background-image: linear-gradient(
            90deg
            ,#e6f8ff,hsla(0,0%,100%,0));
            span {
              vertical-align: middle;
            }
            .icon-dunpai {
              margin-right: 0.078947rem;
            }
            .icon-right {
              color: #ccc;
              opacity: .7;
            }
          }
          >p {
            font-size:0.485263rem;
            font-weight: 700;
            margin: 0.394737rem 0 0.754737rem 0;
          }
          .feedback {
            display: flex;
            justify-content: space-around;
            li {
              display: flex;
              flex-direction: column;
              align-items: center;
              span {
                margin-top: 0.105263rem;
              }
              &:nth-child(1) {
                color: #00abf5;
            }
            }
            
          }
        }
        .insurance {
          background-color: #fff;
          padding-top: 0.484211rem;
          padding-bottom: 0.484211rem;
          .title {
            position: relative;
            margin-bottom: 0.131579rem;
            span {
              vertical-align:middle;
            }
            .icon-dunpai {
              color: #29caff;
            }
            .icon-right {
              position: absolute;
              right: 0;
              opacity: .4;
            }
          }
          p {
              opacity: .7;
            }
        }
      }
    
    
  }
  .header {
    background: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%) no-repeat;
    .title {
      font-weight: 700;
    }
  }
</style>
