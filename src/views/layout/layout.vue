<template>
  <el-container id="layout_container">
    <el-aside id="layout_left" :class="{ fold: settingStore.isFold }">
      <logo></logo>
      <scrollbar class="navigationBar" :menuList="userSotre.routes"></scrollbar>
    </el-aside>
    <el-container id="layout_right">
      <el-header id="layout_tabber">
        <top-bar></top-bar>
      </el-header>
      <el-main id="layout_main">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
  import logo from "@/components/LeftNavigationBar/logo.vue";
  import scrollbar from "@/components/leftNavigationBar/scrollbar.vue";
  import topBar from "@/views/layout/topBar.vue";
  import useUserStore from "@/store/modules/user.ts";
  import { useSettingStore } from "@/store/modules/setting.ts";

  const userSotre = useUserStore();
  const settingStore = useSettingStore();
</script>

<style scoped lang="scss">
  #layout_container {
    width: 100vw;
    height: 100vh;

    #layout_left {
      width: $base-menu-width;
      height: 100%;
      background-color: $base-menu-background;
      color: white;
      transition: width 0.5s;
      .left_nav_logo {
        margin: 30px 0px 10px;
      }
      .navigationBar {
        width: 100%;
        height: calc(100% - 120px);
      }
    }
    #layout_right {
      #layout_tabber {
        height: $base-tabber-height;
        background-color: rgb(255, 255, 255);
      }
      #layout_main {
        background-color: teal;
      }
    }
    .fold {
      width: $fold-menu-width !important;
      overflow: hidden;
    }
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 1s;
  }
  .fade-enter-to {
    opacity: 1;
  }
</style>
