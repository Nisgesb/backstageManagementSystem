<template>
  <div id="login_container">
    <el-row>
      <!-- xs	<768px 响应式栅格数或者栅格属性对象 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登陆表单 -->
        <el-form
          id="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>hello</h1>
          <h2>欢迎回来</h2>
          <!-- 表单元素 -->
          <!-- 账号框 -->
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <!-- 密码框 -->
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
            <el-button
              id="login_btn"
              type="primary"
              size="default"
              @click="subLogin"
              :loading="isLoading"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
  import { User, Lock } from "@element-plus/icons-vue";
  import { reactive, ref } from "vue";
  import useUserStore from "@/store/modules/user.ts";
  import { useRouter } from "vue-router";
  import { ElNotification } from "element-plus";
  import { getTimePeriod } from "@/utils/views/login.ts";

  const userStore = useUserStore();
  const $router = useRouter();
  const loginForms = ref();

  // 收集账号与密码的数据
  let loginForm = reactive({
    username: "admin",
    password: "111111",
  });

  // 表单校验对象
  const rules = reactive({
    username: [
      { required: true, message: "请输入账号", trigger: "blur" },
      {
        min: 2,
        max: 10,
        message: "账号长度在2到10个字符之间",
        trigger: "blur",
      },
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      {
        min: 3,
        max: 20,
        message: "密码长度在3到20个字符之间",
        trigger: "blur",
      },
    ],
  });
  let isLoading = ref(false);

  const subLogin = async () => {
    isLoading.value = true;

    loginForms.value.validate(async valid => {
      if (valid) {
        try {
          await userStore.userLogin(loginForm);
          $router.push("/");
          isLoading.value = false;
          ElNotification({
            type: "success",
            title: `Hi, ${getTimePeriod()}好`,
            message: "登录成功！",
          });
        } catch (error) {
          isLoading.value = false;
          ElNotification({
            type: "error",
            message: error.message,
          });
        }
      } else {
        isLoading.value = false;
        ElNotification({
          type: "error",
          message: "请检查您的输入",
        });
      }
    });
  };
</script>

<style scoped lang="scss">
  #login_container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url("@/assets/images/background.jpg") no-repeat;
    background-size: cover;
  }
  #login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 15px 0;
    }
    #login_btn {
      width: 100%;
    }
  }
</style>
