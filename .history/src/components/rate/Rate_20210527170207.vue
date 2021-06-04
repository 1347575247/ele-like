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
            <li>
              <span class="iconfont icon-chaping"></span>
              <span>非常差</span>
            </li>
            <li>
              <span class="iconfont icon-smile active"></span>
              <span>一般</span>
            </li>
            <li>
              <span class="iconfont icon-haoping"></span>
              <span>超赞</span>
            </li>
          </ul>
          <ul class="rate-tags">
            <li class="active">送餐快</li>
            <li>餐品完好</li>
            <li>服务态度好</li>
            <li>准时到达</li>
            <li>穿着专业</li>
            <li>衣着整洁</li>
            <li class="write">
              <span class="iconfont icon-pen"></span>
              <span>文字评价</span>
            </li>
          </ul>
          <div class="write-box">
            <input type="text" placeholder="说说哪里好，其他顾客想知道～">
          </div>

        </div>
      </div>
    </div>
  </div>
	
</template>

<script>
  import {Progress} from 'vant'
	export default{
		components:{
      [Progress.name]:Progress
    },
    setup(props, ctx) {

    }
	}
</script>

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
              color: rgb(255, 115, 28);
              border-color: rgb(255, 115, 28);
              background-color: rgb(255, 242, 234);
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
          input {
            outline: none;
            background: transparent;
            width:100%;
            word-wrap: break-word;
          }
        }
      }
    }
  }
  

  
</style>