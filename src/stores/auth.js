import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      username: useStorage('username', null),
      userid: useStorage('userid', null),
      token: useStorage('token', null),
    };
  },
  actions: {
    login(user, token) {
      //axios request
      this.username = 'Robin';
      this.userid = 1;
      this.token = 'guid-token-1234';
    },
    logout() {
      //axios request
      this.username = null;
      this.userid = null;
      this.token = null;
    },
  },
  getters: {
    isAuthenticated() {
      return this.userid;
    },
  },
});
