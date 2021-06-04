<template>
	<div class="detail">
		Detail
    {{id}}
	</div>
</template>

<script>
  import {useRoute} from 'vue-router'
	export default{
    setup(props, ctx) {
      const nowRoute = useRoute()
      console.log(nowRoute)
      return {
        id: nowRoute.query.id
      }
    }
	}
</script>

<style>
</style>
