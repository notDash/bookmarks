
import { defineStore } from 'pinia';
import { store } from '../index';
export const useLoadingStore = defineStore({
  id: 'app-loading',
  state: () => ({
    showLoading: false,
  }),
  getters: {
    getLoadingStatus() : boolean {
      return this.showLoading
    }
  },
  actions: {
    setLoading(stauts: boolean) {
      this.showLoading = stauts
    }
  },
});

// Need to be used outside the setup
export function useLoadingStoreWithOut() {
  return useLoadingStore(store);
}
