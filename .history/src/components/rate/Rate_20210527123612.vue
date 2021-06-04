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
      }
    }
  }
</style>