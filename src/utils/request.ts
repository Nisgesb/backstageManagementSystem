import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use(config => {
  return config;
});

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    let message = "";
    const status = error.response.status;
    switch (status) {
      case 400:
        message = "请求错误 (400)";
        break;
      case 401:
        message = "未授权，请重新登录 (401)";
        break;
      case 403:
        message = "拒绝访问 (403)";
        break;
      case 404:
        message = "请求出错，未找到该资源 (404)";
        break;
      case 408:
        message = "请求超时 (408)";
        break;
      case 500:
        message = "服务器错误 (500)";
        break;
      case 501:
        message = "服务未实现 (501)";
        break;
      case 502:
        message = "网络错误 (502)";
        break;
      case 503:
        message = "服务不可用 (503)";
        break;
      case 504:
        message = "网络超时 (504)";
        break;
      default:
        message = `未知错误 (${status})`;
        break;
    }
    ElMessage({
      type: "error",
      message,
    });

    return Promise.reject(error);
  }
);

export default request;
