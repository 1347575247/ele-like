<template>
  <div class="menu-list">
    <van-tree-select
      v-model:active-id="state.activeId"
      v-model:main-active-index="state.activeIndex"
      :items="items"
    />
  </div>
</template>

<script>
import { Sidebar, SidebarItem, TreeSelect  } from 'vant';
import menuModel from './js/menuModel'
export default {
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [TreeSelect.name]: TreeSelect,
  },
  setup(props, ctx) {
    const {state, items} = menuModel()
    return {
      state,
      items,
    }
  }
}
</script>

<style>

</style>