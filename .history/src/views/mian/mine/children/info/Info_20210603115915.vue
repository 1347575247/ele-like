<template>
  <div>
    <div class="b-background"></div>
    <div class="info">
      <ul class="info-list">
        <li class="info-item">
          <span class="l-text">头像</span>
          <div>
            <img src="~@/assets/head-icon" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>

</script>

<style lang="scss" scoped>
  .info {
    position: relative;
    z-index: 10;
    .info-list {
      .info-item {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>