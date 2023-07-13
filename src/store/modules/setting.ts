import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
  state: () => {
    return {
      isFold: false,
    };
  },
  actions: {
    clickFold() {
      this.isFold = !this.isFold
    },
  },
  getters: {},
});
