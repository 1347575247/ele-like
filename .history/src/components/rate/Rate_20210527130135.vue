<template>
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
        margin: 0.105263rem 0.078947rem 0.4 0.131579rem; //4 3 4 5
        .name {
          font-size: 0.421053rem;
        }
        .edit-icon {
          display: inline-block;
          height: 0.457895rem; //6
          width: 0.457895rem; //6
        }
        .time, .icon-edit{
          opacity: .5;
        }
      }
    }
  }
</style>