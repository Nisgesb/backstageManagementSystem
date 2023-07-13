<template>
  <el-scrollbar class="scrollbar-wrap" native>
    <el-menu
      background-color="#001529"
      text-color="#fff"
      :default-active="$route.path"
      :collapse="settingStore.isFold"
    >
      <my-menu-item :list="props.menuList"></my-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import myMenuItem from "./myMenuItem.vue";
  import { useSettingStore } from "@/store/modules/setting.ts";
  const settingStore = useSettingStore();
  const $route = useRoute();
  const props = defineProps(["menuList"]);
  console.log($route.path);
</script>

<style scoped lang="scss">
  .el-menu {
    border: 0 !important;
  }
</style>
