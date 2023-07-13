<template>
  <el-header class="left_nav_logo">
    <div>
      <img src="@/assets/images/logoHalf.png" alt="logo" />
    </div>
    <div class="right_nav_title">
      <h1 id="title">广东东软学院</h1>
      <span class="interpret">NEUSOFT INSTITUTE GUANDONG</span>
    </div>
  </el-header>
</template>

<script setup></script>

<style scoped lang="scss">
  .left_nav_logo {
    display: flex;
    align-items: center;
    width: 100%;
    img {
      width: 50px;
      height: 50px;
      margin-left: -9px;
    }
    .right_nav_title {
      width: 180px;
      flex-shrink: 0;
      margin-left: 12px;
      margin-top: 3px;
      #title {
        white-space: nowrap;
        flex-grow: 1;
        text-align: center;
        font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
        font-weight: bold;
        font-size: 25px;
        letter-spacing: 0.3em;
        transform: scale(0.9);
        transform-origin: left;
      }
      .interpret {
        margin-top: 5px;
        display: block;
        white-space: nowrap;
        font-size: 12px;
        transform: scale(0.62);
        transform-origin: left;
        letter-spacing: 0.2rem;
      }
    }
  }
</style>
