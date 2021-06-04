<template>
  <div class="body">
    <!-- <h3>主体部分</h3> -->
    <router-view></router-view>
    <TooBar></TooBar>
  </div>
</template>

<script>
  import TooBar from '../../components/toolBar/ToolBar.vue'
  import bodyModel from './js/bodyModel'
	export default{
		components:{
			TooBar
    },
    setup() {
      bodyModel()
    }
	}
</script>

<style>
</style>
