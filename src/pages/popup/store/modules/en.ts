
import { defineStore } from 'pinia';
import { store } from '../index';
const locale = localStorage.getItem('lang')
export const useEnStore = defineStore({
  id: 'app-en',
  state: () => ({
    showEnPopup: false,
    en: locale || 'English'
  }),
  getters: {
    getPopupShowStatus() : boolean {
      return this.showEnPopup
    },
    getEn() : string {
      return this.en
    }
  },
  actions: {
    setEn(en: string) {
      localStorage.setItem("lang", en);
      this.en = en
    },
    setPopupShowStatus(flag: boolean) {
      this.showEnPopup = flag;
    }
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useEnStore(store);
}
