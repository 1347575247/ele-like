<template>
	<!-- 工具条 -->
	<div class="tool-bar-warp">
		<ul class="tool-bar">
			<!-- grow_shrink 宽度平分 -->
			<li class="tool-bar-item grow_shrink">
        <i class="iconfont icon-shouye2"></i>
        <span>首页</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default{
		/* composition API */
		setup(){
			/* 定义数组对象，存放toolbar 所需的图标和文字 */
			const data=reactive({
				bar_items:[
					{
						name:'首页',
						icon:'icon-shouye2',
						link:'home'
					},{
						name:'发现',
						icon:'icon-faxian',
						link:'discover'
					},{
						name:'订单',
						icon:'icon-dingdan',
						link:'order'
					},{
						name:'我的',
						icon:'icon-wode',
						link:'mine'
					}
					
				]
			})
			
			// 要在template中使用 setup中的属性，需要return出去
			return{
				...toRefs(data)
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

	}
</style>
