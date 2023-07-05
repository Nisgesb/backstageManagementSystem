<template>
  <div id="login_container">
    <el-row>
      <!-- xs	<768px 响应式栅格数或者栅格属性对象 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登陆表单 -->
        <el-form>
          <h1>hello</h1>
          <h2>欢迎回来</h2>
          <!--  -->
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style scoped>
  #login_container {
    width: 100vw;
    height: 100vh;
    background: url("@/assets/images/background.jpg") no-repeat;
    background-size: cover;
  }
</style>
