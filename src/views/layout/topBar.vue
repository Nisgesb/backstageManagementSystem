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
        <round-button iconName="Refresh" @click="clickRefresh"></round-button>
        <round-button iconName="FullScreen" @click="clickFullScreen">
        </round-button>
        <round-button iconName="Setting"></round-button>
      </div>
      <!-- 头像信息 -->
      <avatar
        :avatarsrc="userStore.userInfo.avatar"
        :username="userStore.userInfo.username"
      ></avatar>
    </div>
  </div>
</template>

<script setup>
  import roundButton from "@/components/topBar/roundButton.vue";
  import { useSettingStore } from "@/store/modules/setting.ts";
  import useUserStore from "@/store/modules/user.ts";
  import showCurrentLocation from "@/components/topBar/showCurrentLocation.vue";
  import avatar from "@/components/topBar/avatar.vue";
  const settingStore = useSettingStore();
  const userStore = useUserStore();
  console.log(userStore.userInfo);

  const clickFold = () => {
    settingStore.clickFold();
  };
  const clickRefresh = () => {
    settingStore.refreshFlag = !settingStore.refreshFlag;
  };
  const clickFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
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
      cursor: pointer;
      margin-right: 15px;
    }
  }
</style>
