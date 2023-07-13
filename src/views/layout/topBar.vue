<template>
  <div class="topBarContainer">
    <!-- 左侧 -->
    <div class="leftBar">
      <!-- 折叠按钮 -->
      <div class="collapseBar" @click="clickFold">
        <el-icon size="20">
          <component :is="settingStore.isFold ? 'Expand' : 'Fold'"></component>
        </el-icon>
      </div>
      <!-- 显示当前路径 -->
      <show-current-location></show-current-location>
    </div>
    <!-- 右侧 -->
    <div class="rightBtn">
      <!-- 圆形按钮 -->
      <div class="circleBtn">
        <round-button iconName="Refresh"></round-button>
        <round-button iconName="FullScreen"></round-button>
        <round-button iconName="Setting"></round-button>
      </div>
      <!-- 头像信息 -->
      <avatar></avatar>
    </div>
  </div>
</template>

<script setup>
  import roundButton from "@/components/topBar/roundButton.vue";
  import { useSettingStore } from "@/store/modules/setting.ts";
  import showCurrentLocation from "@/components/topBar/showCurrentLocation.vue";
  import avatar from "@/components/topBar/avatar.vue";
  const settingStore = useSettingStore();

  const clickFold = () => {
    settingStore.clickFold();
  };
</script>

<style scoped lang="scss">
  .topBarContainer {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .leftBar,
    .rightBtn,
    .circleBtn,
    .userAvatar {
      display: flex;
      align-items: center;
    }
    .circleBtn {
      margin-right: 26px;
    }

    .collapseBar {
      margin-right: 15px;
    }
  }
</style>
