<template>
	<div class="rate">
    <div class="progress-box">
      金币<span>1</span>/ <span>4</span>
      <van-progress 
        :percentage="50"
        pivot-text=""
        color="#ffaa0c"
       />
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
    position: relative;
    width: 3.684211rem;
    top: 0.526316rem;

  }
</style>