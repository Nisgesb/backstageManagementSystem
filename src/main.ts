import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "@/style/index.scss";
import "element-plus/dist/index.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "virtual:svg-icons-register";
import globalComponentPlugin from "@/globalComponentPlugin";
import router from "./router";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(globalComponentPlugin);
app.use(router);

app.mount("#app");
