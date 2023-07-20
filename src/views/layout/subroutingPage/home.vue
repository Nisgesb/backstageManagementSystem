<template>
  <h1>首页</h1>
</template>

<script setup>
  import { onMounted } from "vue";
  import useUserStore from "@/store/modules/user.ts";

  const useStore = useUserStore();
  onMounted(async () => {
    const result = await useStore.getUserInfo();
    console.log(result);
  });
</script>

<style scoped></style>
