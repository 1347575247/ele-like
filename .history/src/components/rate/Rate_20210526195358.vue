<template>
	<div class="rate">
    <div class="aaa">
      <van-progress :percentage="50" />
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
</style>