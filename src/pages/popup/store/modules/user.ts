
import { defineStore } from 'pinia';
import { store } from '../index';
export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    // user info
    userInfo: {},
    // token
    token: '',
    // roleList
    roleList: [],
    // Whether the login expired
    sessionTimeout: false,
    // Last fetch time
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): Object {
      return this.userInfo
    },
    getToken(): string {
      return this.token
    },
  },
  actions: {
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    }
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
