<template>
  <div>
    <template v-for="item in props.list" :key="item.path">
      <el-menu-item
        v-if="!item.children && item.meta.showNavbar"
        :index="item.path"
        @click="clickMenu($event)"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>

      <el-menu-item
        v-if="
          item.children &&
          item.children.length === 1 &&
          item.children[0].meta.showNavbar
        "
        :index="item.path"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>

      <el-sub-menu
        v-if="item.children && item.children.length > 1 && item.meta.showNavbar"
        :index="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <my-menu-item :list="item.children"></my-menu-item>
      </el-sub-menu>

      <!-- 展示当前layout下的子路由 -->
      <my-menu-item
        v-if="item.name == 'layout'"
        :list="item.children"
      ></my-menu-item>
    </template>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";
  const $router = useRouter();
  const props = defineProps(["list"]);
  const clickMenu = event => {
    $router.push(event.index);
  };
</script>
<script>
  export default {
    name: "myMenuItem",
  };
</script>

<style scoped>
  .el-menu--collapse .el-sub-menu__title span {
    display: none;
  }
  .el-menu--collapse .el-sub-menu__title .el-sub-menu__icon-arrow {
    display: none;
  }
</style>
