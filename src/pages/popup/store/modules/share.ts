
import { defineStore } from 'pinia';
import { store } from '../index';
export const useShareStore = defineStore({
  id: 'app-share',
  state: () => ({
    showSharePopup: false,
    showCoolSharePopup: false,
    shareData: {
    }
  }),
  getters: {
    getCoolSharePopupStatus() : boolean {
      return this.showCoolSharePopup
    },
    getSharePopupStatus() : boolean {
      return this.showSharePopup
    },
    getShareData() : Object {
      return this.shareData
    }
  },
  actions: {
    setShareData(data: Object) {
      this.shareData = data
    },
    setSharePopupStatus(flag: boolean) {
      this.showSharePopup = flag;
    },
    setCoolSharePopupStatus(flag: boolean) {
      this.showCoolSharePopup = flag;
    }
  },
});

// Need to be used outside the setup
export function useShareStoreWithOut() {
  return useShareStore(store);
}
