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
    async login(user, token) {
      await axios
        .get(
          'https://webdesignnop.nl/authenticate/?user=' +
            user +
            '&token=' +
            token
        )
        .then((response) => {
          this.username = response.data.data.username;
          this.userid = response.data.data.userid;
          this.token = response.data.data.token;
        })
        .catch((response) => {
          alert(JSON.stringify(response));
        });
    },
    logout() {
      this.username = null;
      this.userid = null;
      this.token = null;
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.userid;
    },
  },
});
