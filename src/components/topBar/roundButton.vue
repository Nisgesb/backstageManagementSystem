<template>
  <el-button circle size="large">
    <el-icon>
      <component :is="props.iconName"></component>
    </el-icon>
  </el-button>
</template>

<script setup>
  const props = defineProps(["iconName"]);
</script>

<style scoped></style>
