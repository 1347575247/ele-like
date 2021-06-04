<template>
	<!-- 工具条 -->
	<div class="tool-bar-warp">
		<ul class="tool-bar">
			<!-- grow_shrink 宽度平分 -->
			<li class="tool-bar-item grow_shrink">
        1
			</li>
		</ul>
	</div>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default{
		/* composition API */
		setup(){

			// 要在template中使用 setup中的属性，需要return出去
			return{
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.tool-bar-warp{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
    .tool-bar{
			background-color: #fff;
			.tool-bar-item{
				text-align: center;
				padding: 0.133333rem 0; //5
				font-size: 0.373333rem; //14
				color: #ccc;
				.iconfont{
					display: block;
					font-size: 0.64rem; //24
					margin-bottom: 0.16rem;
				}
      }
    }
	}
</style>
