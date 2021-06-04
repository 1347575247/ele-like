<template>
	<!-- 工具条 -->
	<div class="tool-bar-warp">
		<ul class="tool-bar">
			<!-- grow_shrink 宽度平分 -->
			<li class="tool-bar-item grow_shrink">
        <div class="text">
          <span>合计:</span>
          <div class="price">
            <span class="money-sign">¥ </span>
            766.73
            <br>
            <span class="money-sign">已优惠¥341.18</span>
          </div>
        </div>

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
				.price {
          text-align:start;
          display: inline-block;
          vertical-align: top;
          font-size: 0.473684rem;
          .money-sign {
            font-size: 0.315789rem;
          }
        }
      }
    }
	}
</style>
