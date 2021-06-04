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
    height: 2.757895rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    align-items: center;
    padding: 0 0.368421rem;
    color: #fff;
    position: relative;
    img {
      border-radius: 50%;
      width: 1.736842rem;
    }
    .info {
      margin-left: 0.394737rem;
      p {
        font-size: 0.521053rem;
        font-weight: 700;
      }
      span {
        display: inline-block;
        margin-top: 0.263158rem;
      }
    }
    .icon-right {
      float: right;
    }
  }
</style>
