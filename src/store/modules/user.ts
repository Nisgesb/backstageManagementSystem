import { defineStore } from "pinia";
import { reqLogin } from "@/api";
import { loginForm } from "@/api/type";
import { loginResponseData } from "@/api/type";
import { UserState } from "../type";
import { routes } from "@/router/routes";

const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      token: localStorage.getItem("TOKEN"),
      routes: routes,
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
  },

  getters: {},
});

export default useUserStore;
