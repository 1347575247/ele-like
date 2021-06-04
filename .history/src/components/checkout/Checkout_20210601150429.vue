<template>
	<div class="order-checkout">
    <div class="background"></div>
		<vHead title="确认订单" @back="back" class="header">
    </vHead>

    <div class="main">
      <van-notice-bar
        left-icon="volume-o"
        text="为减少接触，降低风险，请修改下方备注"
        closeable
        mode="closeable"
      />
      
      <div class="aftet-sell">
        <div class="safety p-spacing" @click="show.insurance=true">
          <span class="iconfont icon-dunpai"></span>
          <span>号码保护·食无忧</span>
          <span class="iconfont icon-right sm-font"></span>
        </div>
        <div class="p-spacing address">
          尚品铂家酒店(挂绿广场瑞祥店)3楼322房
          <span class="iconfont icon-right"></span>
          <p class="person-info">蔡伦多（先生） 13227678973</p>
        </div>
        <div class="deliver-time p-spacing" @click="show.deliverTimeShow = true">
          <span class="text">{{deliver.mode}}</span>
          <span class="time">
            {{deliver.arrivedTime}}
            <span class="iconfont icon-right"></span>
          </span>
          
        </div>

      </div>


      <div class="detail br-radius p-spacing">
        
        <div class="top" v-if="foodState">
          <span class="title">{{firstItem(foodState).item.restaurant_name}}</span>
          <span class="iconfont icon-right"></span>
          <div class="add">
            <p>{{deliver.deliverTime}}</p>
          </div>
        </div>
        <ul class="food-list" v-if="foodState" :style="{maxHeight: show.isUnfolded ? 'auto' : '9.2rem'}">
          <li class="item" v-for="(food,i) in foodState" :key="i">
            <img :src="$formatImgSrc(food.item.image_path)" alt="">
            <div class="info" :class="{discount:food.original_price}">
              <p class="food-name">{{food.name}}</p>
              <p class="food-num">x {{food.count}}</p>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span>
              <del class="origin" v-if="food.original_price">￥{{food.original_price}}</del>
            </div>
          </li>
        </ul>
        <p class="unfold" @click="show.isUnfolded = !show.isUnfolded">
          {{show.isUnfolded ? '收起' : '展开'}}
         （供{{foodLength}}件）
          <span class="iconfont" :class="show.isUnfolded ? 'icon-icon_up_arrow' : 'icon-icon-down'"></span>
        </p>
        <ul class="desc" v-if="foodState">
          <li class="item clearFixed">
            <span class="name">包装费</span>
            <span class="value">¥ {{firstItem(foodState).item.specfoods[0].packing_fee}}</span>
          </li>
          <li class="item clearFixed">
            <span class="name">配送费</span>
            <span class="value">{{feeFormat(firstItem(foodState).item.deliver_fee).value}}</span>
          </li>
          <li class="item clearFixed discount">
            <span class="name">商品满减</span>
            <span class="value redpack">
              <span>-￥13</span>
            </span>
          </li>
          <li class="item clearFixed preference">
            <span class="name">商品满减</span>
            <span class="value redpack">
              <span>-￥13</span>
              <span class="iconfont icon-right"></span>
            </span>
          </li>

        </ul>
      </div>
      
    </div>

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
          <li class="item">
            <span class="iconfont icon-dunpai"></span>
            <div class="desc">
              <span class="name">食无忧</span>
              <span class="iconfont icon-question"></span>
              <p>在饿了么平台订餐消费后，如遇到餐品质量问题或食物中毒致病就医等在食品安全责任保险“食无忧”保障范围内的情况，可在饿了么平台发起保险索赔，由保险公司向您进行保险理赔</p>
            </div>
          </li>
        </ul>
    </van-popup>
    <!-- 配送时间弹出层 -->
    <van-popup
      v-model:show="show.deliverTimeShow"
      round
      position="bottom"
      :style="{ height: '30%' }"
      class="deliver-time-pop"
      closeable
    >
    <p class="title">选择预订送达时间</p>
    <van-tree-select
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="timeSelectItems"
      @click-item="timeChosen"
    />
    </van-popup>
	</div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  import checkModel from './js/checkModel'
  import { Popup, Overlay, Step, Steps, NoticeBar, Icon, TreeSelect, Sidebar,SidebarItem   } from 'vant';

	export default{
		components:{
      vHead,
      [Popup.name]: Popup,
      [Step.name]: Step,
      [Steps.name]: Steps,
      [Overlay.name]: Overlay,
      [NoticeBar.name]: NoticeBar,
      [Icon.name]: Icon,
      [TreeSelect.name]: TreeSelect,
      [Sidebar.name]: Sidebar,
      [SidebarItem.name]: SidebarItem,
    },
    setup(props, ctx) {
      const {show, back, activeId, activeIndex, timeSelectItems, timeChosen, deliver, foodState, firstItem, feeFormat, foodLength} = checkModel()

      return {
        show,
        back,
        activeId,
        activeIndex, 
        timeSelectItems,
        timeChosen,
        deliver,
        foodState,
        firstItem,
        feeFormat,
        foodLength
      }
    }
	}
</script>
<style lang="scss">
  .van-tree-select__nav-item {
    text-decoration: none!important;
  }
</style>
<style lang="scss" scoped="scoped">

.van-notice-bar {
  border-radius: 0.342105rem; // 13
}

.header{
  position: relative;
  z-index: 10;
}
  .order-checkout {
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
          .address {
            font-size:0.485263rem;
            font-weight: 700;
            margin: 0.394737rem 0 0.754737rem 0;
            position: relative;
            >.icon-right {
              position: absolute;
              right: 0.105263rem;
              top: 0.105263rem;
              opacity: .5;
            }
            >.person-info {
              font-weight: 400;
              font-size: 0.315789rem;
              margin-top: 0.342105rem;
            }
          }
          .deliver-time {
            font-size: 0.385421rem;
            position: relative;
            .time {
              color: #00acf0;
              position: absolute;
              right: 0;
              .icon-right {
                margin-right: 0.078947rem;
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
              background-color:#59ce12;
              padding: 0.078947rem 0.131579rem;
              border-radius: 0.078947rem;
              right: 0;
              top: 0;
              color: #fff;
              * {
                vertical-align: middle;
              }
            }
            
          }
          .food-list {
            max-height: 9.2rem;
            overflow: hidden;
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
                  margin-left: 0.74737rem;
                  font-size: 0.68421rem;
                }
                .food-num {
                  margin-top: 0.157895rem;
                  opacity: .5;
                  margin-left: 0.74737rem;
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
                  margin-left: 0.74737rem;
                }
                float: left;
                font-size:0.388421rem;
                
              }
              .discount {
                &::before {
                  content: '折';
                  background: #ff5128;
                  border-radius: 0.131579rem;
                  color: #fff;
                  padding: 0.05316rem 0.068947rem;
                  position: absolute;
                  margin-left: 0.194737rem;
                  font-size: 0.315789rem;
                }
              }
              .price {
                position: absolute;
                display: flex;
                flex-direction:column;
                right: 0;
                top: 0;
                text-align: end;

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
          .unfold {
            text-align:center;
            margin: 0.263158rem 0;
            opacity: .5;
          }
          .desc {
            li {
              margin: 0.463158rem 0;
              .name {
                font-size: 0.368421rem;
              }
              .value {
                float: right;
                max-width: 6.315789rem;
                text-align: right;
                word-break: break-all;
                font-size: 0.447368rem;
                .iconfont{
                  vertical-align: middle;
                  opacity: .5;
                }
              }
              .redpack{
                p,span {
                  color: #ff4b33;
                }
                
              }
            }
            .preference{
              .redpack {
                .icon-right {
                  color: #000;
                  margin: 0;
                }
              }
              &::before {
                  content: '¥';
                  padding: 0.052632rem 0.038947rem;
                  text-align: center;
                  color: #fff;
                  background-color: #ff4b33;
                  border-radius: 0.157895rem;
                  width: 0.368421rem;
                  display: inline-block;
                  margin-right: 0.131579rem;
              }
            }
            .discount {
              .redpack {
                .icon-right {
                  color: #000;
                  margin: 0;
                }
              }
              &::before {
                  content: '减';
                  padding: 0.052632rem 0.038947rem;
                  text-align: center;
                  color: #fff;
                  background-color: #ff4b33;
                  border-radius: 0.107895rem;
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
            display:flex;
            margin: 0.526316rem 0;
            .icon-dunpai {
              color:#29caff;
            }
            .desc {
              margin-left: 0.184211rem;
              vertical-align: top;
              span {
                vertical-align: middle;
              }
              .icon-question {
                font-size: 0.315789rem;
                opacity: .7;
                margin-left: 0.105263rem;
              }
              p {
                margin-top: 0.157895rem;
                opacity: .6;
              }
            }
          }
        }
      }
      .deliver-time-pop {
        .title {
          font-size: 0.526316rem;
          text-align: center;
          margin: 0.5rem;
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
