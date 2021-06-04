<template>
  <div class="offsets">
    <div class="no-offsets">
      <img src="~@/assets/no-offsets.gif" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @mixin common-background {
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
  }
  .offsets {
    @include common-background;

    .no-offsets {
      img {
        display: block;
        width: 55%;
        margin: 0 auto;
        margin-top: 1.826316rem;
      }
    }
  }

  
</style>