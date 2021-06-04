<template>
  <div class="benefit">
    <vHead title="我的优惠">
			<!-- 使用具名插槽 -->
			<template v-slot:header_main>
				<!-- 城市/地址 -->
				<div class="home_header">
					<div  @click="show.side=true">
						<i class="iconfont icon-iconlocation"></i>
						<span >{{currentSide?currentSide:"请选择城市/地址"}}</span>
						<i class="iconfont icon-xiala"></i>
					</div>
					<!-- 搜索商家 -->
					<div class="header_search" v-fixed>
						<p class="search_main">
							<i class="iconfont icon-icon_sousuo"></i>
							搜索商家
						</p>
					</div>
				</div>
			</template>
		</vHead>
  </div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  
  export default {
    components: {
      [vHead.name]: vHead
    },
    setup() {

    }
  }
</script>

<style lang="scss" scoped>

</style>