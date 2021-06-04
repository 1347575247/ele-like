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
      <p class="order-state" @click="show.progress=true">订单已送达
        <span class="iconfont icon-right"></span>
        
      </p>
      

      <div class="aftet-sell">
        <div class="safety p-spacing" @click="show.insurance=true">
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
        <div class="top">
          <span class="title">大润发(增城店)</span>
          <span class="iconfont icon-right"></span>
          <div class="add">
            <span class="iconfont icon-round-playlist_add-"></span>
            <span>再来一单</span>
          </div>
        </div>
        <ul class="food-list">
          <li class="item">
            <img src="https://img.alicdn.com/imgextra/i2/2680068332/O1CN01nCtkRi2BQ6g5SSp7W_!!2680068332.jpg_70x70q90_.webp" alt="">
            <div class="info">
              <p class="food-name">杰克丹尼威士忌预调酒-苹果味330ml/瓶</p>
              <p class="food-num">x 2</p>
            </div>
            <div class="price">
              <span class="now">￥6.9</span>
              <del class="origin">￥8.9</del>
            </div>
          </li>
          <li class="item">
            <img src="https://img.alicdn.com/imgextra/i3/2680068332/TB224BwwgaTBuNjSszfXXXgfpXa_!!2680068332.jpg_70x70q90_.webp" alt="">
            <div class="info">
              <p class="food-name">毛桃500g/盒</p>
              <p class="food-num">x 1</p>
            </div>
            <div class="price">
              <span class="now">￥6.9</span>
              <del class="origin">￥8.9</del>
            </div>
          </li>
          <li class="item">
            <img src="https://img.alicdn.com/imgextra/i2/2680068332/O1CN01nCtkRi2BQ6g5SSp7W_!!2680068332.jpg_70x70q90_.webp" alt="">
            <div class="info">
              <p class="food-name">毛桃500g/盒</p>
              <p class="food-num">x 2</p>
            </div>
            <div class="price">
              <span class="now">￥6.9</span>
              <del class="origin">￥8.9</del>
            </div>
          </li>
          <li class="item">
            <img src="https://img.alicdn.com/imgextra/i4/2680068332/TB2pVqbDuuSBuNjy1XcXXcYjFXa_!!2680068332.jpg_70x70q90_.webp" alt="">
            <div class="desc">
              <p class="food-name">现切果盘(哈密瓜+红肉火龙果)/盒400g</p>
              <p class="food-num">x 1</p>
            </div>
            <div class="price">
              <span class="now">￥16.9</span>
            </div>
          </li>
        </ul>
        <ul class="desc">
          <li class="item clearFixed">
            <span class="name">配送费(商家配送)</span>
            <span class="value">￥0</span>
          </li>
          <li class="item clearFixed">
            <span class="name">收货地址</span>
            <span class="value">
              荔城街道尚品铂家酒店(挂绿广场瑞祥店)3楼322房
              <br>
              蔡伦多(先生) 13226752962
              </span>
          </li>
          <li class="item clearFixed preference">
            <span class="name">果蔬商超新人补贴</span>
            <span class="value redpack">
              <p>-￥13</p>
              总优惠
              <span>￥25.6</span>
              <i>总计￥30.8</i>
            </span>
          </li>
          <li class="item clearFixed">
            <span class="name">订单号</span>
            <span class="value">5026 5542 2550 8293 702
              <span class="iconfont icon-tubiaozhizuomoban-"></span>
            </span>
            
          </li>
          <li class="item clearFixed">
            <span class="name">送达时间</span>
            <span class="value">尽快送达</span>
          </li>
          <li class="item clearFixed">
            <span class="name">配送方式</span>
            <span class="value">商家配送</span>
          </li>
          <li class="item clearFixed">
            <span class="name">配送骑士</span>
            <span class="value">刘东胜</span>
          </li>
          <li class="item clearFixed">
            <span class="name">支付方式</span>
            <span class="value">在线支付</span>
          </li>
          <li class="item clearFixed">
            <span class="name">下单时间</span>
            <span class="value">2021-05-22 20:46</span>
          </li>
        </ul>
      </div>
      
    </div>
    <!-- 订单送达消息弹出层 -->
    <van-popup
      v-model:show="show.progress"
      round
      position="bottom"
      closeable
      :style="{ height: '70%' }"
      class="progress-pop"
    >
      <p class="title">订单跟踪</p>
      <van-steps direction="vertical" :active="0">
        <van-step>
          <span class="desc">订单提交成功</span>
          <span class="time">05-22 20:46</span>
        </van-step>
        <van-step>
          <span class="desc">订单已支付</span>
          <span class="time">05-22 20:47</span>
        </van-step>
        <van-step>
          <span class="desc">商家已接单</span>
          <span class="time">05-22 20:47</span>
        </van-step>
        <van-step>
          <span class="desc">开始配送</span>
          <span class="time">05-22 21:27</span>
        </van-step>
        <van-step>
          <span class="desc">订单已送达</span>
          <span class="time">05-22 21:42</span>
          <p class="finished">商家已确认送达</p>
        </van-step>
        <van-step>
          <span class="desc">订单已完成</span>
          <span class="time">05-22 21:42</span>
          <p class="finished">感谢你对饿了么的信任，期待再次光临</p>
        </van-step>
      </van-steps>
    </van-popup>
    <!-- 服务保障弹出层 -->
		<van-popup
        v-model:show="show.insurance"
        round
        position="bottom"
        closeable
        :style="{ height: '44%' }"
        class="insurance-pop"
      >
        <p class="title">服务保障</p>
        <ul class="insure-list p-spacing">
          <li class="item">
            <span class="iconfont icon-dunpai"></span>
            <div class="desc">
              <span class="name">号码保护</span>
              <span class="iconfont icon-question"></span>
              <p>为保障用户隐私和服务质量，对商家、骑士隐藏您的真实手机号，通话过程可能被录音</p>
            </div>
          </li>
          
        </ul>
      </van-popup>
	</div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  import oDModel from './js/oDModel'
  import { Popup, Overlay, Step, Steps } from 'vant';

	export default{
		components:{
      vHead,
      [Popup.name]: Popup,
      [Step.name]: Step,
      [Steps.name]: Steps,
      [Overlay.name]: Overlay,
    },
    setup(props, ctx) {
      const {show} = oDModel()

      return {
        show
      }
    }
	}
</script>

<style lang="scss" scoped="scoped">
  .order-detail {
    overflow: auto;
    height: 100%;
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
        .detail {
          background-color: #fff;
          margin: 0.365263rem 0;
          padding-top: 0.484211rem;
          padding-bottom: 0.484211rem;
          
          .top {
            position: relative;
            span {
              vertical-align: middle;
            }
            .title {
              font-weight: 700;
            }
            .add {
              position: absolute;
              right: 0;
              top: 0;
              color: rgb(41, 202, 255);
              * {
                vertical-align: middle;
              }
            }
            
          }
          .food-list {
            .item {
              height: 1.578947rem;
              position: relative;
              margin-top: 0.263158rem;
              img {
                height: 1.581579rem;
                float: left;
              }
              .desc {
                .food-name {
                  margin-top:0.052632rem;
                  max-width: 4.436842rem;
                }
                .food-num {
                  margin-top: 0.157895rem;
                  opacity: .5;
                }
                float: left;
                font-size:0.388421rem;
              }
              .info {
                .food-name {
                  margin-left: 0.74737rem;
                  margin-top:0.052632rem;
                  max-width: 4.436842rem;
                }
                .food-num {
                  margin-top: 0.157895rem;
                  opacity: .5;
                }
                float: left;
                font-size:0.388421rem;
                &::before {
                  content: '折';
                  background: #ff5128;
                  border-radius: 0.131579rem;
                  color: #fff;
                  padding: 0.05316rem 0.068947rem;
                  position: absolute;
                  // margin-left: -0.594737rem;
                }
              }
              .price {
                position: absolute;
                display: flex;
                flex-direction:column;
                right: 0;
                top: 0;

                .now {
                  font-size: 0.454737rem;
                }
                .origin{
                  margin-left: 0.151579rem;
                  opacity: .5;
                }
              }
            }
          }
          .desc {
            li {
              margin: 0.463158rem 0;
              .value {
                float: right;
                max-width: 6.315789rem;
                text-align: right;
                word-break: break-all;
                .iconfont{
                  vertical-align: middle;
                  opacity: .5;
                }
              }
              .redpack{
                p,span {
                  color: #ff4b33;
                }
                span {
                  margin-right: 0.157895rem;
                }
                
              }
            }
            .preference{
              &::before {
                  content: '￥';
                  padding: 0.052632rem 0.078947rem;
                  color: #fff;
                  background-color: #ff4b33;
                  border-radius: 0.157895rem;
                  width: 0.368421rem;
                  display: inline-block;
                  margin-right: 0.131579rem;
                }
            }
          }
        }
      }
      .progress-pop {
        .title {
          font-size: 0.526316rem;
          text-align: center;
          margin: 0.5rem;
        }
        .desc {
          font-size: 0.368421rem;
        }
        .time {
          opacity: .5;
          font-size: 0.368421rem;
          float: right;
        }
        .finished {
          opacity: .5;
          font-size: 0.368421rem;
        }
      }
      .insurance-pop {
        .title {
          font-size: 0.526316rem;
          text-align: center;
          margin: 0.5rem;
        }
        .insure-list {
          li {
            .icon-dunpai {
              color:#29caff;
            }
            .desc {
              display: inline-block;
              width: 80%;
              vertical-align: top;
              .name {
                vertical-align: middle;
              }
            }
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
