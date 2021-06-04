<template>
	<div class="rate">
    <div class="progress-box">
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
    width: 2.631579rem;
  }
</style>