<template>
	<div class="mine">
		<div class="head">
      <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_180,h_180,m_fixed" alt="">
      <div class="info">
        <p>314603bc2</p>
        <span class="iconfont icon-phone1"></span>
        <span>132****2962</span>
      </div>
      <span class="iconfont icon-right"></span>
    </div>
		
	</div>
</template>

<script>
	import vHead from '@comps/header/Header.vue'
	export default{
		components:{
			vHead
		}
	}
</script>

<style lang="scss" scoped>
  .head {
    width: 100%;
    height: 3.157895rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    img {
      border-radius: 50%;
      width: 1.736842rem;
    }
  }
</style>
