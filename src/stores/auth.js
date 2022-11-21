import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from 'axios';

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
      axios.get('https://webdesignnop.nl/orders/').then((response) => {
        alert(JSON.stringify(response));
      });
      this.username = 'Robin';
      this.userid = 1;
      this.token = 'guid-token-1234';
    },
    logout() {
      this.username = null;
      this.userid = null;
      this.token = null;
    },
  },
  getters: {
    isAuthenticated() {
      this.logout();
      return this.userid;
    },
  },
});
