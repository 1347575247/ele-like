<template>
  <div>
    <div class="back"></div>
    <div class="rate p-spacing">
      <div class="progress-box">
        <p>
          <span class="active">金币 1 </span>
          / 
          <span class="inactive">4</span>
        </p>
        
        <van-progress 
          :percentage="50"
          pivot-text=""
          color="#ffaa0c"
        />
      </div>

      <!-- 对配送评价 -->
      <div class="rate-delivery">
        <div class="top">
          <span class="rate-head-icon"></span>
          <div class="deliver-info">
            <span class="name">黄家劲</span>
            <br>
            <span class="time">22:40（1小时30分钟）</span>
            <span class="iconfont icon-edit"></span>
          </div>
          <span class="anonymous">已对骑士匿名</span>
        </div>
        <div class="rate-1">
          <p class="title">配送评价</p>
          <ul class="rate-btns">
            <li @click="deliverRate(1)">
              <span class="iconfont icon-chaping" :style="rate.delivery.activeIndex === 1 ? { color: '#95a5c3', borderColor: '#9aadc5',backgroundColor: '#e7ecf2'}: ''"></span>
              <span>非常差</span>
            </li>
            <li @click="deliverRate(2)">
              <span class='iconfont icon-smile' :style="rate.delivery.activeIndex === 2 ? { color: 'rgb(255, 115, 28)', borderColor: 'rgb(255, 115, 28)',backgroundColor: 'rgb(255, 242, 234)'}: ''"></span>
              <span :style="rate.delivery.activeIndex === 2 ? { color: 'rgb(255, 115, 28)'}: ''">一般</span>
            </li>
            <li @click="deliverRate(3)">
              <span class="iconfont icon-haoping" :style="rate.delivery.activeIndex === 3 ? { color: '#ff731c', backgroundColor: '#fff2ea'}: ''"></span>
              <span :style="rate.delivery.activeIndex === 3 ? { color: '#ff731c'}: ''">超赞</span>
            </li>
          </ul>
          <ul class="rate-tags" v-if="rate.delivery.activeIndex" ref="tags">
            <li v-for="(item, i) in rate.delivery.comments" :key="i" @click="addComment" class="item">{{item}}</li>
            <li class="write" @click="rate.delivery.textareaShow = true">
              <span class="iconfont icon-pen"></span>
              <span>文字评价</span>
            </li>
          </ul>
          <div class="write-box" v-if="rate.delivery.textareaShow">
            <textarea style="vertical-align:top;outline:none;" maxlength="140" placeholder="说说哪里好，其他顾客想知道～"></textarea>
          </div>

        </div>
      </div>

      <!-- 对商家评价 -->
      <div class="rate-store">
        <div class="top">
          <img src="https://cube.elemecdn.com/5/f4/d6386b23d87c17f31d33331a53ecfpng.png?x-oss-process=image/format,webp/resize,w_76,h_76,m_fixed" alt="">
          
          <span class="name">华润万家（增城挂绿店）</span>

          <div class="anonymous">
            <span class="iconfont icon-duigou active"></span>
            <span>匿名评价</span>
          </div>
          
        </div>
        <div class="rate-1 clearFixed">
          <p class="title">商家评价</p>
          <van-rate 
            v-model="rate.overall" 
            @change="overallChange"
            size="38px"
            touchable
            allow-half
            :color="rateObj.overall.color"
            gutter="10px"
            class="overall-rate"
          />
          <p :class="'tag '+rateObj.overall.class">{{rateObj.overall.text}}</p>

          <div class="package" v-if="rate.store.overall">
            <span class="name">包装</span>
            <van-rate 
              v-model="rate.package" 
              @change="packageChange"
              size="26px"
              touchable
              allow-half
              :color="rateObj.package.color"
              gutter="10px"
              class="package-star"
            />
            <span :class="'tag '+rateObj.package.class">{{rateObj.package.text}}</span>
          </div>

          <div class="quality" v-if="rate.store.package">
            <span class="name">包装</span>
            <van-rate 
              v-model="rate.quality" 
              @change="qualityChange"
              size="26px"
              touchable
              allow-half
              :color="rateObj.quality.color"
              gutter="10px"
              class="package-star"
            />
            <span :class="'tag '+rateObj.quality.class">{{rateObj.quality.text}}</span>
          </div>

          <div class="write-box" v-if="rate.store.quality">
            <textarea style="vertical-align:top;outline:none;" maxlength="140" placeholder="商品质量好，包装也仔细，下次还会点"></textarea>
          </div>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="bottom-btn" @click="notify">提交评价</div>
    </div>
  </div>
	
</template>

<script>
  import {Progress, Rate, Icon, Toast } from 'vant'
  import rateModel from './js/rateModel'

	export default {
		components:{
      [Progress.name]:Progress,
      [Rate.name]:Rate,
      [Icon.name]:Icon,
      [Toast.name]: Toast,
    },
    setup(props, ctx) {
      const {rate, rateObj, overallChange, packageChange, qualityChange, deliverRate, addComment, notify} = rateModel()
      return {
        rate,
        rateObj,
        overallChange,
        packageChange,
        qualityChange,
        deliverRate,
        addComment,
        notify
      }
    }
	}
</script>
<style lang="scss">
  .van-rate__icon--half {
    position: absolute;
    left: 0;
  }
</style>
<style lang='scss' scoped>
  .back {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:#f5f5f5;
    z-index: 1;
  }
  .rate {
    position: relative;
    z-index: 2;
    .progress-box {
      text-align: center;
      margin: auto;
      width: 3.684211rem;
      margin-top: 0.526316rem;
      >p {
        margin-bottom: 0.157895rem;
        font-size: 0.368421rem;
        font-weight: 700;
        .active {
          color: #ffaa0c;
        }
        .inactive {
          opacity: .5;
        }
      }
    }
    // 评价配送
    .rate-delivery {
      .top {
        .rate-head-icon {
          display: inline-block;
          height: 1.105263rem; //42
          width: 1.105263rem; //42
          background-position: 0 0;
        }
        .deliver-info {
          display: inline-block;
          vertical-align: top;
          margin: 0.105263rem 0.078947rem 0.4rem 0.131579rem; //4 3 4 5
          .name {
            font-size: 0.394737rem; // 15
            &::after {
              content: '蓝骑手专送';
              background-image: linear-gradient(286deg,#0085ff,#0af);
              color: #fff;
              border-radius: 0.017895rem;
              padding: 0.026316rem 0.052632rem;
              font-size: 0.263158rem; 
              transform: scale(0.95);
              display: inline-block;
              margin-left: 0.184211rem;
            }
          }
          .edit-icon {
            display: inline-block;
            height: 0.457895rem; //6
            width: 0.457895rem; //6
          }
          .time, .icon-edit{
            opacity: .5;
            margin-top: 0.157895rem;
          }
        }
        .anonymous {
          float: right;
          margin-top: 0.463158rem;
          opacity: .66;
        }
      }
      .rate-1 {
        width:100%;
        background: #fff;
        padding-bottom: 0.842105rem;
        .title {
          text-align: center;
          font-size:0.447368rem; //17
          font-weight: 700;
          line-height: 2.026316rem; // 77
        }
        // 骑士评价按钮
        .rate-btns {
          margin: auto;
          width: 5rem;
          display:flex;
          justify-content: space-between;
          margin-bottom: 0.789474rem;
          li {
            display: flex;
            flex-direction: column;
            text-align: center;
            .iconfont {
              font-size: 1.052632rem;
              opacity: 1;
              color: rgba(0, 0, 0, 0.27);
              margin-bottom: 0.184211rem;
              // background: #ccc;
              border-radius: 50%;
            }
            span {
              opacity: .7;
            }
            .active {
              color: #ff731c;
              background-color: #fff2ea;
            }
            
          }
        }
        // 骑士标签
        .rate-tags {
          display: flex;
          max-width: 80%;
          margin: auto;
          justify-content: center;
          flex-wrap: wrap;
          li {
            border: 1px solid #ddd;
            border-radius: .08rem;
            padding: 0.157895rem;
            margin: 0 0.221053rem 0.221053rem 0;
            opacity: .6;
            &.active {
              // color: rgb(255, 115, 28);
              color: #95a5c3;
              // border-color: rgb(255, 115, 28);
              border-color: #9aadc5;
              // background-color: rgb(255, 242, 234);
              background-color:#e7ecf2;
            }
            &.write {
              color: #0097ff;
              span {
                vertical-align: middle;
              }
              .iconfont {
                font-size: 0.315789rem;
                padding-right: 0.052632rem;
              }
            }
          }
        }
        // 文字评价
        .write-box {
          width: 90%;
          margin: auto;
          height: 2.631579rem;
          background:#fafafa;
          textarea {
            outline: none;
            border: none;
            background: transparent;
            width:90%;
            font-size:0.394737rem;
            padding: 0.263158rem;
          }
        }
      }
    }
    // 评价商家
    .rate-store {
      margin-top: 0.905263rem;
      margin-bottom: 2.315789rem;
      .top {
        margin-bottom: 0.305263rem;
        img {
          height: 1.105263rem;
          vertical-align: middle;
        }
        .name {
          font-size: 0.394737rem; // 15
          vertical-align: middle;
          margin-left: 0.263158rem;
        }

        .anonymous {
          float: right;
          margin-top: 0.463158rem;
          opacity: .66;
          span {
            vertical-align: middle;
            padding: 0.052632rem;
            opacity: .7;
          }
          .iconfont {
            opacity: .3;
            &.active {
              color: #04e068;
              opacity: 1;
            }
          }
        }
      }
      .rate-1 {
        width:100%;
        background: #fff;
        padding-bottom: 0.842105rem;
        position: relative;
        .title {
          text-align: center;
          font-size:0.447368rem; //17
          font-weight: 700;
          line-height: 2.026316rem; // 77
        }
        // 总体评价
        .overall-rate {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        // 总体评价标签
        .tag {
          text-align: center;
          margin-top: 1.226316rem;
          &.good {
            color: #ff731c;
          }
          &.bad {
            color: rgb(137, 159, 188);
          }
          &.soso {
            color:rgb(255, 170, 12);
          }
        }
        // 包装评价
        .package{
          position: relative;
          margin: auto;
          width: 6.905263rem;
          span {
            position: relative;
            display: inline-block;
            margin-top: 0.263158rem;
            vertical-align: middle;
            top: -0.317895rem;
            font-size: 0.368421rem;
            &.name {
              margin-right: 0.263158rem;
            }
            &.tag {
              margin-left: 0.263158rem;
            }
          }
          .package-star{
            margin-top: 0.263158rem;

          }
        }
        // 质量评价
        .quality{
          position: relative;
          margin: auto;
          width: 6.905263rem;
          span {
            position: relative;
            display: inline-block;
            margin-top: 0.263158rem;
            vertical-align: middle;
            top: -0.317895rem;
            font-size: 0.368421rem;
            &.name {
              margin-right: 0.263158rem;
            }
            &.tag {
              margin-left: 0.263158rem;
            }
          }
          .package-star{
            margin-top: 0.263158rem;

          }
          
        }
        // 文字评价
        .write-box {
          width: 90%;
          margin: auto;
          height: 2.631579rem;
          background:#fafafa;
          textarea {
            outline: none;
            border: none;
            background: transparent;
            width:90%;
            font-size:0.394737rem;
            padding: 0.263158rem;
          }
        }

      }
    }
    // 底部按钮
    .bottom-btn {
      position: fixed;
      width: 94%;
      height: 1.131579rem;
      line-height: 1.131579rem;
      background: #2396ff;
      color: #fff;
      font-size: 0.394737rem;
      font-weight: 700;
      text-align: center;
      bottom: 0.526316rem;
    }
  } 
</style>