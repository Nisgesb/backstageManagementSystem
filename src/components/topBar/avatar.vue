<template>
  <div class="userAvatar">
    <el-avatar :size="40">
      <img src="@/assets/images/touxiang.jpg" />
    </el-avatar>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup></script>

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
