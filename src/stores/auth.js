import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      username: null,
      userid: null,
      token: null,
    };
  },
  actions: {
    login(user, token) {
      alert('login method auth store');
      //axios request
      this.username = 'Robin';
      this.userid = 1;
      this.token = 'guid-token-1234';
    },
  },
  getters: {
    // doubleCount: (state) => {
    //   return state.count * 2;
    // },
    isAuthenticated() {
      return !!this.userid;
    },
  },
});
