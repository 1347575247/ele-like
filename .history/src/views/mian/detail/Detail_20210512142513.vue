<template>
	<div class="detail">
		Detail
    {{rst}}
	</div>
</template>

<script>
  import detailModel from './js/detail.js'
	export default{
    setup(props, ctx) {
      const {rst} = detailModel()
      return {
        rst
      }
    }
	}
</script>

<style>
</style>
