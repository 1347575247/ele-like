<template>
	<div class="detail">
		Detail
    {{id}}
	</div>
</template>

<script>
  import detailModel from './js/detail.js'
	export default{
    setup(props, ctx) {
      detailModel()
      return {
        id: $Route.query.id
      }
    }
	}
</script>

<style>
</style>
