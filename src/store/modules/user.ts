import { defineStore } from "pinia";
import { reqLogin, reqUserInfo } from "@/api";
import { loginForm } from "@/api/type";
import { loginResponseData } from "@/api/type";
import { routes } from "@/router/routes";

const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: localStorage.getItem("TOKEN"),
      routes: routes,
      userInfo: {},
    };
  },

  actions: {
    async userLogin(loginForm: loginForm) {
      const result: loginResponseData = await reqLogin(loginForm);
      console.log(result);
      if (result.code == 200) {
        this.token = result.data.token as string;
        localStorage.setItem("TOKEN", result.data.token as string);
        return "ok";
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },

    async getUserInfo() {
      const result = await reqUserInfo();
      this.userInfo = result.data.checkUser;
    },

    logout() {
      localStorage.removeItem("TOKEN");
      this.token = "";
      this.userInfo = {};
    },
  },
  getters: {},
});

export default useUserStore;
