import SvgIcon from "@/components/SvgIcon/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const globalComponents = { SvgIcon };
export default {
  install(app: any) {
    Object.keys(globalComponents).forEach(key => {
      app.component(key, globalComponents[key]);
    });

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
