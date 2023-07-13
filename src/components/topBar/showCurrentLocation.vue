<template>
  <div class="showCurrentLocation">
    <template v-for="(item, index) in $route.matched" :key="item.path">
      <div v-if="item.meta.showNavbar">
        <el-icon size="16" class="route-icon">
          <component :is="item.meta.icon"> </component>
        </el-icon>
        <span> {{ item.meta.title }}</span>
        <el-icon v-if="index != $route.matched.length - 1" class="arrowRight">
          <ArrowRight></ArrowRight>
        </el-icon>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  const $route = useRoute();
</script>

<style scoped lang="scss">
  .showCurrentLocation {
    display: flex;
    .arrowRight {
      margin: 0 8px;
    }

    .route-icon {
      margin-right: 3px;
    }
  }
</style>
