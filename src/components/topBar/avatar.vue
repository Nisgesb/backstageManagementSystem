<template>
  <div class="userAvatar">
    <el-avatar :size="40">
      <img :src="props.avatarsrc" />
    </el-avatar>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{ props.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="clickLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
  import useUserStore from "@/store/modules/user.ts";
  import { useRouter } from "vue-router";
  const props = defineProps(["avatarsrc", "username"]);
  const $router = useRouter();
  const userStore = useUserStore();
  const clickLogout = () => {
    userStore.logout();
    $router.replace("login");
  };
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .el-avatar {
    margin-right: 8px;
  }
</style>
