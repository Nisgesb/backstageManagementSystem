import request from "@/utils/request";
import type { loginForm, loginResponseData, userResponseData } from "./type";

enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

// 请求登录方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 请求用户信息方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL);
